const express = require('express')
const data = express.Router()
const cors = require("cors")
var bodyParser = require('body-parser')

const Fundwork = require('../model/Fundworkschema')

data.use(cors())
data.use(bodyParser.json())

const add = async (req, res) => {
  const Fwork = {
    purpose:req.body.purpose ,
    username:req.body.username,
    cashiername:req.body.cashiername,
    place:req.body.place,
    date:req.body.date,
    amount:req.body.amount,

  }

  Fundwork.findOne({
     username: req.body.username
   })
     .then(username => {
       if (!username) {
          Fundwork.create(Fwork)
            .then(data => {
              res.json({ status: data + 'added!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
       } 
   
     })
     .catch(err => {
       res.send('error: ' + err)
     })
}

const get = async(req, res) => {
            await Fundwork.find()
            .then(data => {
              res.json(data)            
            })
            .catch(err => {
              res.status(400).json('error: ' + err)
            })
}



module.exports = {
  add: add,
  get: get

}
