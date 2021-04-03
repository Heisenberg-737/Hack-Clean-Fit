import json
from flask import request, jsonify
from clean_fit.models import Users, Route, PlaceInfo, CleanCityIndex, History
from clean_fit import app, db
from flask_cors import CORS, cross_origin
from mapbox import Directions
import os
import math
import random
import datetime
from copy import deepcopy
import datetime
# from clean_fit.data_parser import parse_geo_info, parse_measures

service = Directions(
    access_token='pk.eyJ1IjoicHJhbmF5a290aGFyaSIsImEiOiJja21kdTllMGoyY2VjMnBzOXA2eXBqZjJoIn0.v69swMJIzyBvXgbMHvOgGQ')


# frontend routes


@app.route('/', methods=["GET", "POST"])
def catch():
    return app.send_static_file('index.html')


@app.route('/go', methods=["GET", "POST"])
def catch_go():
    return app.send_static_file('index.html')


@app.route('/dashboard', methods=["GET", "POST"])
def catch_dashboard():
    return app.send_static_file('index.html')


@app.route('/history', methods=["GET", "POST"])
def catch_history():
    return app.send_static_file('index.html')


@app.route('/about', methods=["GET", "POST"])
def catch_about():
    return app.send_static_file('index.html')


@app.route('/signin', methods=["GET", "POST"])
def catch_signin():
    return app.send_static_file('index.html')

# backend routes and functions

def parsing_run(args):
    distance = args.get('distance', 2.0)
    lat = args.get('lat', 28.67)
    long = args.get('long', 77.22)

    distance = float(distance) / 110.57
    lat = float(lat)
    long = float(long)

    return distance, long, lat


def point_selector(distance, long, lat):
    angle = random.random()*math.pi*2

    template = {
        'type': 'Feature',
        'properties': {'name': None},
        'geometry': {
                'type': 'Point',
                'coordinates': list()}}

    pointA = deepcopy(template)
    pointA['geometry']['coordinates'] = [long, lat]

    pointB = deepcopy(template)
    pointB['geometry']['coordinates'] = [
        long + math.sin(angle)*distance/3, lat + math.cos(angle)*distance/3]

    pointC = deepcopy(template)
    pointC['geometry']['coordinates'] = [
        long + math.sin(angle + 2/3 * math.pi)*distance/3, lat + math.cos(angle + 2/3 * math.pi)*distance/3]

    pointAC = deepcopy(pointA)
    pointAC['geometry']['coordinates'] = [long + (math.sin(angle + 2/3 * math.pi)*distance/3)/2,
                                          lat + (math.cos(angle + 2/3 * math.pi)*distance/3)/2]

    return [pointA, pointB, pointC, pointAC, pointA]


@app.route('/backend/login', methods=['GET', 'POST'])
def google_login():
    content = request.get_json()
    uid = content["uid"]
    name = content["name"]
    email = content["email"]

    user = Users.query.filter(Users.email == email).first()

    if user is None:
        user_in = Users(uid=uid, email=email, name=name)
        db.session.add(user_in)
        db.session.commit()

    return "Successful", 400


@app.route('/backend/history', methods=['GET', 'POST'])
def history():
    content = request.get_json()
    uid = content["uid"]

    runs = History.query.filter(History.uid == uid).all()

    List = []
    Dict = {}

    for run in runs:
        Dict = {
            'distance': run.distance,
            'date': run.date,
            'calories': run.calories
        }
        List.append(Dict)

    return json.dumps(List)


@app.route('/backend/totalrun', methods=['GET', 'POST'])
def total_run():
    content = request.get_json()
    uid = content["uid"]
    runs = History.query.filter(History.uid == uid).all()

    List = []
    Dict = {}
    total_distance = 0
    total_calories = 0

    for run in runs:
        total_distance = total_distance + run.distance
        total_calories = total_calories + run.calories

    Dict = {
        'total_distance': total_distance,
        'total_calories': total_calories
    }
    List.append(Dict)

    return json.dumps(List)


@app.route('/backend/cleanrun', methods=['GET', 'POST'])
def clean_run():
    content = request.get_json()
    #print("Content Here : ",request.get_json())
    distance = content["userInputs"]["distance"]
    long = content["userInputs"]["longitude"]
    lat = content["userInputs"]["latitude"]
    uid = content["userInputs"]["uid"]
    # print("DISTANCE : ", distance)
    # distance = 2.0
    # long = 77.22
    # lat = 28.67

    # distance, long, lat = parsing_run(request.args)
    # except ValueError:
    #     return jsonify("Invalid data format")
    calories = 68*distance
    date = datetime.datetime.now()
    date = date.strftime("%x")
    run = History(uid=uid, distance=distance, date=date, calories=calories)
    db.session.add(run)
    db.session.commit()

    points = point_selector(distance, long, lat)

    path = service.directions(points,
                              profile='mapbox/walking',
                              steps=True,
                              language='de',
                              overview='full',
                              geometries='geojson')

    if path.status_code != 200:
        return jsonify("An error has occured")

    path_json = path.json()

    coordinates = path_json['routes'][0]['geometry']['coordinates']

    augmented_coords = AugmentedCoordinates(coordinates)

    # print(augmented_coords)

    response = augmented_coords.to_response()
    response['distance'] = path_json['routes'][0]['distance']

    return jsonify(response)

# @app.route('/testroute', methods=["GET", "POST"])
# def home_home():
#     # parse_geo_info()
#     # parse_measures()
#     distance, long, lat = parsing_run(request.args)
#     points = point_selector(distance, long, lat)
#     # print(points)
#     path = service.directions(points,
#                               profile='mapbox/walking',
#                               steps=True,
#                               language='de',
#                               overview='full',
#                               geometries='geojson')

#     if path.status_code != 200:
#         return jsonify("An error has occured")

#     path_json = path.json()
#     coordinates = path_json['routes'][0]['geometry']['coordinates']
#     # print(coordinates)
#     augmented_coords = AugmentedCoordinates(coordinates)
#     response = augmented_coords.to_response()
#     response['distance'] = path_json['routes'][0]['distance']
#     # print(augmented_coords)
#     print(response['distance'])

#     return jsonify(response)


class AugmentedCoordinates:
    def __init__(self, coordinates):
        self.coordinates = coordinates
        self.augmented_coordinates = list()
        self.construct_ccis()

    def construct_ccis(self):
        i = 0
        for coord in self.coordinates:
            geo_infos = PlaceInfo.query.filter(
                PlaceInfo.geometry.contains(f'POINT({coord[0]} {coord[1]})')).all()
            node = Coordinate(coord, geo_infos)
            self.augmented_coordinates.append(node)
            if i != 0:
                self.augmented_coordinates[-1].ccis_with_next = self.augmented_coordinates[-1].ccis & node.ccis
            i += 1

    def to_response(self):
        response = {}
        response['coordinates'] = []
        for ac in self.augmented_coordinates:
            sum_cci_w = 0
            for cci_entry in ac.ccis_with_next:
                sum_cci_w += cci_entry.cci
            if len(ac.ccis_with_next) != 0:
                sum_cci_w /= len(ac.ccis_with_next)
            else:
                sum_cci_w = None

            sum_cci = 0
            for cci_entry in ac.ccis:
                sum_cci += cci_entry.cci
            if len(ac.ccis) != 0:
                sum_cci /= len(ac.ccis)
            else:
                sum_cci = None

            data = {'long': ac.coordinate[0],
                    'lat': ac.coordinate[1]
                    }
            response['coordinates'].append(data)

        return response

    def __repr__(self):
        return f'AC acs: {self.augmented_coordinates}'


class Coordinate:
    def __init__(self, coordinate, geo_infos):
        self.coordinate = coordinate
        self.geo_infos = geo_infos
        self.ccis = set()
        self.ccis_with_next = set()

    def day_cci(self, day):
        for geo_info in self.geo_infos:
            if geo_info.osm_id is not None:
                self.ccis.update(CleanCityIndex.query.filter(
                    CleanCityIndex.geo_info == geo_info).all())

    def __repr__(self):
        resp1 = f'\nCoordinate: {self.coordinate[0]} {self.coordinate[1]} CCIS: {self.ccis_with_next}'
        return resp1
