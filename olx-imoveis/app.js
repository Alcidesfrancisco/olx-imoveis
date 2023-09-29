
const express = require("express");
import Olx from "./src/index";

const app = express();
app.listen(3000, () => { 
    console.log("Server running on port 3000");
})

app.get("/", (req, res) => { 
    const client_id = "1055d3e698d289f2af8663725127bd4b";
    client_secret = "SenhaObrigatoria";
    redirect_uri = "http://18.231.147.40:3000/token";
    
    const olx = new Olx(client_id, client_secret, redirect_uri);

    res.send(olx.getAuthUrl); 
})

app.get("/token", (req, res) => { 
   

    res.send(req); 
})