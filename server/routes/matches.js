const express = require('express');
const router = express.Router();
let Matches = require('../models/matches')
let Match = require('../models/match')



router.get('/matches',  (req,res) => {
  // console.log("RES :", res)
  Matches.find()
  //.populate("postedBy")
  .then(p => {
      res.json({matches: p})
  })
  .catch(err=>{
      console.log(err)
  })
})

router.post('/addmatch', (req,res) => {
  const {homeName, homeLogo,awayName, awayLogo, date, location} = req.body
  if(!homeName || !homeLogo || !awayName || !awayLogo || !date || !location ){
      res.status(422).json({error: "Please fill all fields"})
  } 
  const match = new Matches({
    homeName,
    homeLogo,
    awayName,
    awayLogo,
    date,
    location
  })
  
  match.save().then(result => {
      res.json({post: result})
  })
  .catch(err =>{
      console.log(err)
  })
})


module.exports = router