const axios = require('axios');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const url = 'https://bet.hkjc.com/contentserver/jcbw/cmc/last30draw.json'
app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get("/api", (req, res) => {
    axios.get(url).then((response) => {
        res.json(response.data)
    })
    .catch((err)=>console.error(err))
    
});

app.listen(5000, () => {
    console.log("server on PORT 5000");
})