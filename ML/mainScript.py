import sys
import os
import pandas as pd
import random

filepath="/Users/daksh_mac/Desktop/Dev/gitRepos/nitr-hack/AllianceBois/data/2019-09-27-basel-measures-cleaned-main.csv"

mainFrame=pd.read_csv(filepath,sep=";")

places_dataframe=pd.read_json(r'/Users/daksh_mac/Desktop/SmartCleanCityHackZurich19-master/cityScraping/cityScraping/spiders/delhiPlaces.json')

place_name_list_foreign=list(mainFrame['place_name'])
place_osmid=list(mainFrame['osm_id'])

replacing_place_names={}
coor_lat={}
coor_long={}
common_place_id={}
corr_osm_lat={}
corr_osm_long={}

for i in range(len(place_name_list_foreign)):
    common_place_id[place_name_list_foreign[i]]=place_osmid[i]

unique_places=list(set(place_name_list_foreign))
num_unique_places=len(unique_places)

'''reading the delhi cities from a json file which is scraped from internet using Scrapy'''


places=list(places_dataframe['place'])
lats=list(places_dataframe['lat'])
longs=list(places_dataframe['long'])

list_of_lats=[]
list_of_longs=[]

for i in range(len(places)):
    coor_lat[places[i]]=lats[i]
    coor_long[places[i]]=longs[i]

random.shuffle(places)

'''Now I have to replace names of the foreign cities with the Indian ones'''

for i in range(num_unique_places):
    replacing_place_names[unique_places[i]]=places[i]
    osmid=common_place_id[unique_places[i]]
    
    corr_osm_lat[osmid]=coor_lat[places[i]]
    corr_osm_long[osmid]=coor_long[places[i]]

for i in range(len(place_name_list_foreign)):
    
    place_name_list_foreign[i]=replacing_place_names[place_name_list_foreign[i]]
    
    list_of_lats.insert(i,coor_lat[place_name_list_foreign[i]])
    list_of_longs.insert(i,coor_long[place_name_list_foreign[i]])
    

    
    
mainFrame['place_name']=place_name_list_foreign
mainFrame['latitude']=list_of_lats
mainFrame['longitude']=list_of_longs

mainFrame.to_csv("/Users/daksh_mac/Desktop/Dev/gitRepos/nitr-hack/AllianceBois/data/important-data.csv",index=False)


filepath_2="/Users/daksh_mac/Desktop/Dev/gitRepos/nitr-hack/AllianceBois/data/2019-09-27-basel-collections-main.csv"

basel_collections_frame=pd.read_csv(filepath_2)

main_frame=pd.read_csv("/Users/daksh_mac/Desktop/Dev/gitRepos/nitr-hack/AllianceBois/data/important-data.csv")

osms=list(basel_collections_frame['osm_id'])

lats=[]
longs=[]
for i,osmid in enumerate(osms):
     if osmid in corr_osm_lat:
        lats.insert(i,corr_osm_lat[osmid])
     else:
        lats.insert(i,-1)
        
     if osmid in corr_osm_long:
        longs.insert(i,corr_osm_long[osmid])
     else:
        longs.insert(i,-1)
        
basel_collections_frame["lat"]=lats
basel_collections_frame["long"]=longs

basel_collections_frame.drop(columns=["coordinates"])

basel_collections_frame.to_csv("/Users/daksh_mac/Desktop/Dev/gitRepos/nitr-hack/AllianceBois/data/important-data-2.csv",index=False)