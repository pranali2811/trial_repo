import React, { Component } from 'react';
import PropTypes from 'prop-types';


//use "strict";

function Npmapi() {

   // var app = express();

    var scholarly = require("scholarly");

    // app.use(function(req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     next();
    //   });

    // To search for a specific topic
    
    scholarly.search("Nikhita Mangaonkar").then((data) => {
        console.log(data);
    });

    // To list articles a user co-authored
    scholarly.user("H18-9fkAAAAJ").then((data) => {
        console.log(data);
    });

}

export default Npmapi;
