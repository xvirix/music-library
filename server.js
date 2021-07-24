const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const DeezerPublicApi = require('deezer-public-api');
let deezer = new DeezerPublicApi();
const cors = require('cors');


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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
    useUnifiedTopology: true
  }
);

<<<<<<< HEAD
app.get('/search/:q', (req, res) => {
  deezer.search.artist(req.params.q).then((result) => {
    console.log(result);
    res.json(result);
 });
})

=======
>>>>>>> b60144cc0bcc7e9079853631f2495e85efc22659
//start server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
