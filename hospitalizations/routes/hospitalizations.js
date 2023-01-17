const express = require("express");
var XMLHttpRequest = require('xhr2');

const router = express.Router();
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://epistat.sciensano.be/Data/COVID19BE_HOSP.json");
xhr.send();

let data;

xhr.onload = function() {
    if (xhr.status === 200) {
      //parse JSON datax`x
      data = JSON.parse(xhr.responseText)
    } else if (xhr.status === 404) {
      console.log("No records found")
    }
}

router
  .route("/hospitalizations")
  .get((req, res) => {
    let newData = getData(req);
    res.send(newData);
  });


router
  .route("/hospitalizations/average")
  .get((req, res) => {
    let newData = getData(req);
    let totalIn = 0;

    newData.forEach(record => {
        totalIn+=record.TOTAL_IN;
    });
    let average = {};
    average['average'] = totalIn/newData.length;

    res.send(average);
  });


function getData(req) {
    let year, month;

    if (req.query.year && req.query.month) {
        year = req.query.year;
        month = req.query.month;
    } else {
        year = new Date().getFullYear();
        month = new Date().getMonth()+1;
    }

    let newData = data.filter((record) => {
        return new Date(record.DATE).getFullYear() == year;
    });

    newData = newData.filter((record) => {
        return new Date(record.DATE).getMonth()+1 == month;
    });
    
    return newData;
}
module.exports = router;
