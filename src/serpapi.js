import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Serpapi() {

    const SerpApi = require('google-search-results-nodejs');
    const search = new SerpApi.GoogleSearch("f27584dfd4f6b31ffcf33b293880c7b88ff0404c27db802c2ad64fe38fed5f1e");

    const params = {
        engine: "google_scholar",
        q: "Nikhita Mangaonkar",
        hl: "en"
    };

    const callback = function (data) {
        console.log(data);
    };

    // Show result as JSON
    search.json(params, callback);

}

export default Serpapi;