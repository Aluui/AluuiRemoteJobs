const express = require('express');
const axios = require('axios');
const router = express.Router();

const url = 'https://indreed.herokuapp.com/api/jobs';
const githubUrl =
  'https://jobs.github.com/positions.json?description=remote&full_time=false&location=canada';

// getIngreedJobs = async () => {
//   const jobs = await axios.get(url, {
//     params: {
//         q: "remote web developers",
//         l: "Canada"
//     }
//   });

//   return jobs;
// }

/* GET users listing. */
router.get('/', function(req, res, next) {
  // const jobs = getIngreedJobs()  ;

  // res.send(jobs);

  axios
    .get(url, {
      params: {
        q: 'remote web developers'
        //l: "United States"
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

router.get('/github', function(req, res, next) {
  // const jobs = getIngreedJobs()  ;

  // res.send(jobs);

  axios
    .get(githubUrl)
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

// fetch("https://community-angellist.p.rapidapi.com/jobs", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "community-angellist.p.rapidapi.com",
// 		"x-rapidapi-key": "c13d72194amshd47f2385d3cf4a2p16fd9ejsnf1516c17f89d"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

module.exports = router;
