const axios = require("axios");
const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 4500;

app.use(express.json());
app.use(bodyParser.json())

const getInfo = async (req, res) => {

//   const cityname = req.body.cityname;
  const cityname = "Kigali"
  
  const key = process.env.OPENWEATHERKEY;

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;

  try {
    const response = await axios.post(URL);
    const data = response.data;
    res.json(data);

} catch (err) {
    console.error(err);
    res.status(500).json({ message: "internal error server" });
}


  };
// Add the getInfo function to the app.post() method
app.post('/getInfo', getInfo);



app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
