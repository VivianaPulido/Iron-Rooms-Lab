const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')

const Room= require('../models/Room.model')

//Get create room
router.get('/rooms/create', (req, res, next) => {
  res.render('rooms/rooms-create', {userInSession: req.session.currentUser})
});

//Post de create a room
router.post('/rooms/create', async (req, res, next)=> {
  const {name, description, imageUrl} = req.body
  const {fullName} = req.session.currentUser
  console.log(fullName)
  console.log({name, description, imageUrl})

  const newRoom= await Room.create({name, description, imageUrl, owner:fullName})
  console.log(newRoom)
  res.redirect('/list-rooms')
})

//Eliminar cuartos
router.get('/deleteRoom/:id', async(req, res, next) =>{
  const {id}= req.params
  const foundRoom= await Room.findByIdAndDelete(id)
  res.redirect('/list-rooms')
});


//Listar rooms
router.get('/list-rooms', async (req, res, next) => {
  const roomsInDB= await Room.find({})
      console.log(roomsInDB)
      res.render('rooms/list-rooms' , {roomsInDB}) 
  });

//Ver detalles de rooms
router.get('/rooms/:id', async (req, res, next) => {
  const {id} = req.params
  console.log("Este es el fregao id", id)
  const foundRoom= await Room.findById(id)
  console.log(foundRoom)
  res.render('rooms/room-details', {room: foundRoom}) 
});  


module.exports = router;