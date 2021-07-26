import React, {useState, useEffect} from 'react';
import Player from './Player';
import './style.css'

function Songs() {
const [songs] = useState([
    {
      title: "everything i wanted",
      artist: "Billie Eilish",
      img_src: "./images/everythingIwanted.jpeg",
      src: "./songs/song1.mp3"
    },
    {
      title: "My Favorite Part (feat. Ariana Grande)",
      artist: "Mac Miller",
      img_src: "./images/MyFavoritePart.jpeg",
      src: "./songs/Song2.mp3"
    },
    {
      title: "Save Your Tears",
      artist: "The Weeknd & Ariana Grande",
      img_src: "./images/blindinglights.png",
      src: "./songs/song3.mp3"
    },
    {
      title: "good 4 u,",
      artist: "Olivia Rodrigo",
      img_src: "./images/olivia.jpg",
      src: "./songs/song4.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default Songs;