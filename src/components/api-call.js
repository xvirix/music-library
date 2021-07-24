import React from "react";
import axios from "axios";


 class Api extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      artist: [],
      album: [],
      track: [],
    };
  }
  componentDidMount = () => {
    axios
      .get("https://api.deezer.com/search?q=eminem")
      .then((res) => {
        for (var i = 0; i < res.data.length; i++)
          this.setState({
            artist: [...this.state.artist, res.data[i].artist],
            album: [...this.state.album, res.data[i].album],
            track: [...this.state.track, res.data[i].track],
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <h2> Artist:{this.state.artist[1]}</h2>
        <h3>Album: {this.state.album[1]}</h3>
        <p>Song:{this.state.track[1]}</p>
      </div>
    );
  }
 }

export default Api;
