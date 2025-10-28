import pandas as pd
import numpy as np
import matplotlib.pyplot as plt


songs = pd.read_csv("data/songs.csv")
artists = pd.read_csv("data/artists.csv")


def highest_popularity(songs):
    
    res = songs[songs.popularity == songs.popularity.max()]
    
    print("Title:",res.name.item(),"\nPopularity:",res.popularity.item())
    
    
def longhets_song_in_year(songs,year="1923"):
    tmp = []
    for i in songs.release_date:
        tmp.append(i.split("-")[0])
        
    songs.release_date = tmp
    songs = songs[songs.release_date == year]
    
    res = songs[songs.duration_ms == songs.duration_ms.max()]
    
    duration_ms = res.duration_ms.item()
    print(duration_ms)
    minutes = duration_ms // 60000
    remaining_milliseconds = duration_ms % 60000
    seconds = remaining_milliseconds // 1000
    remaining_milliseconds %= 1000

    duration = str(minutes)+":"+str(seconds)+":"+str(remaining_milliseconds)
    return res.name.item(), duration
   
def my_plot(songs):
    plt.figure(figsize=(15,4))
    plt.subplot(131)
    plt.hist(songs[songs.release_date == "1922"].danceability.to_numpy())
    plt.title("Danceability dist. 1922")
    plt.subplot(132)
    plt.hist(songs[songs.release_date == "1923"].danceability.to_numpy())
    plt.title("Danceability dist. 1923")
    plt.subplot(133)
    plt.hist(songs[songs.release_date == "1924"].danceability.to_numpy())
    plt.title("Danceability dist. 1924")
    plt.savefig("Danceability.pdf")
    plt.show()
    
    
def most_frequent_artist(songs,artists,year):
    songs = songs[songs.release_date == year]
    val,counts = np.unique(songs.id_artists.to_numpy(),return_counts=True)
    id_artist = val[np.argmax(counts)][2:-2]
    name = artists[artists.id == id_artist].name.item()
    
    print("The artist:",name)
    print("Played ",max(counts),"songs in ",year)
    
    

highest_popularity(songs)
longhets_song_in_year(songs,year="1923")
my_plot(songs)
most_frequent_artist(songs,artists,"1924")
