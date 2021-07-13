const express = require("express");
const mongoose = require("mongoose");
var SpotifyWebApi = require("spotify-web-api-node");
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//connect to mongodb
mongoose.connect(
  process.env.MONGOOSE_URI || "mongodb://localhost/musicLibrary",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  }
);

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: "97f90461efb042e383ba725a77137bfe",
  clientSecret: "41f3560516b34ba7a9f48ac2451df0f6",
  redirectUri: "http://localhost:3001/callback",
});

app.get("/callback", function (req, res) {
  let code = req.query["code"];

  spotifyApi.authorizationCodeGrant(code).then(
    function (data) {
      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body["access_token"]);
      spotifyApi.setRefreshToken(data.body["refresh_token"]);
      res.redirect("/");
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
});
app.get("/", (req, res) => {
  // Get Elvis' albums
  spotifyApi.getArtistAlbums("43ZHCT0cAZBISjO8DG9PnE").then(
    function (data) {
      console.log("Artist albums", data.body);
    },
    function (err) {
      // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
      spotifyApi.refreshAccessToken().then(
        function (data) {
          console.log("The access token has been refreshed!");
          // Save the access token so that it's used in future calls
          spotifyApi.setAccessToken(data.body["access_token"]);
          res.redirect(req.originalUrl);
        },
        function (err) {
          console.log("Could not refresh access token", err);
        }
      );
    }
  );
});

//start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
