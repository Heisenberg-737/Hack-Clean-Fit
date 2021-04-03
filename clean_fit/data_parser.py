import pandas as pd
import datetime
from clean_fit.models import PlaceInfo, CleanCityIndex, db

# file_measures = r'2019-09-27-basel-measures-cleaned.csv'
# file_geoinfo = r'2019-09-27-basel-collections.csv'

measures = pd.read_csv(
    r'E:\Hackathons\Latest\data\important-data.csv', sep=',')
geoinfo = pd.read_csv(
    r'E:\Hackathons\Latest\data\important-data-2.csv', sep=',')


def try_parse_int(string_to_int):
    try:
        return int(string_to_int)
    except ValueError:
        return None


def parse_geo_info():
    for index, row in geoinfo.iterrows():
        if index == 0:
            continue
        # print(row['lat'])
        # print(row)
        db.session.add(PlaceInfo(city_id=row['city_id'], osm_id=try_parse_int(
            row['osm_id']), cci_id=row['cci_id'], geometry=row['geometry'], latitude=row['lat'], longitude=row['long'], type=row['type']))
        # print(index)
    db.session.commit()


def parse_measures():
    for index, row in measures.iterrows():
        if index == 0:
            continue
        # print(row)
        geo_info = PlaceInfo.query.filter(
            PlaceInfo.osm_id == try_parse_int(row['osm_id'])).first()
        db.session.add(CleanCityIndex(suitcase_id=row['suitcase_id'],
                                      cci=row['cci'],
                                      latitude=row['latitude'],
                                      longitude=row['longitude'],
                                      rateCigarrettes=row['rateCigarrettes'],
                                      ratePapers=row['ratePapers'],
                                      rateBottles=row['rateBottles'],
                                      rateExcrements=row['rateExcrements'],
                                      rateSyringues=row['rateSyringues'],
                                      rateGums=row['rateGums'],
                                      rateLeaves=row['rateLeaves'],
                                      rateGrits=row['rateGrits'],
                                      rateGlassDebris=row['rateGlassDebris']))

        geo_info.place_name=row['place_name']
        geo_info.place_type=row['place_type']

        # print(geo_info)
    # db.session.query(CleanCityIndex).delete()
    db.session.commit()
