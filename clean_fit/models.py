from clean_fit import db
from geoalchemy2 import Geometry
import datetime

class Users(db.Model):
    __tablename__ = 'Users'
    uid = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100))


class Route(db.Model):
    __tablename__ = 'route'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    start = db.Column(Geometry('POINT'), nullable=False)
    radius = db.Column(db.Float, nullable=False)

    linestring = db.Column(Geometry('LINESTRING'))


class PlaceInfo(db.Model):
    __tablename__ = 'place_info'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    city_id = db.Column(db.String)
    osm_id = db.Column(db.BigInteger)
    cci_id = db.Column(db.String(100))

    geometry = db.Column(db.String)
    latitude = db.Column(db.String)
    longitude = db.Column(db.String)

    type = db.Column(db.String)
    place_name = db.Column(db.String)
    place_type = db.Column(db.String)


class CleanCityIndex(db.Model):
    __tablename__ = 'cc_index'

    id = db.Column(db.Integer, primary_key=True)

    suitcase_id = db.Column(db.Integer)

    latitude = db.Column(db.String)
    longitude = db.Column(db.String)

    cci = db.Column(db.Float)
    rateCigarrettes = db.Column(db.Float)
    ratePapers = db.Column(db.Float)
    rateBottles = db.Column(db.Float)
    rateExcrements = db.Column(db.Float)
    rateSyringues = db.Column(db.Float)
    rateGums = db.Column(db.Float)
    rateLeaves = db.Column(db.Float)
    rateGrits = db.Column(db.Float)
    rateGlassDebris = db.Column(db.Float)
