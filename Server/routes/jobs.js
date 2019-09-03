const express = require('express');
const axios = require('axios');
const router = express.Router();

const url = "https://indreed.herokuapp.com/api/jobs";

getIngreedJobs = async () => {
  const jobs = await axios.get(url, {
    params: {
        q: "remote web developers",
        l: "Canada"
    }
  });

  return jobs;
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // const jobs = getIngreedJobs()  ;

  // res.send(jobs);

  axios.get(url, {
    params: {
        q: "remote web developers",
        l: "Canada"
    }
  })
    .then((response) => {
        res.send(response.data);
    })
    .catch((error) => {
        console.log(error);
        res.send(error);
    })
});



module.exports = router;
