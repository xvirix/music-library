const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT  = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static assets
if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}

//connect to mongodb
mongoose.connect(process.env.MONGOOSE_URI || "mongodb://localhost/musicLibrary", {
    useNewUrlParser: true,
    useFindAndModify: false
});
//start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});