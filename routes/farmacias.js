const router = require('express').Router()
const Farmacia = require('../models/Farmacia')

// Crear farmacias

router.get('/new', (req, res)=>{
  res.render('farmacias/form')
})

router.post('/new', (req, res)=>{  
  Farmacia.create(req.body)
    .then(farmacia=>{
      console.log(farmacia)
      res.redirect('/farmacias')
    }).catch(e=>{
      res.render('error')
      console.log(e)
    })
})

//Listar todas las farmacias

router.get('/', (req, res)=>{
  const {buscador} = req.query  
  Farmacia.find({nombre:{$regex:buscador || '', $options:'i'}})
    .then(farmacias=>{
      res.render('farmacias/list', {farmacias})
    }).catch(e=>{
      console.log(e)
      res.render('error')
    })
})

//Detalle de cada farmacia

router.get('/detail/:id', (req, res)=>{
  const {id} = req.params  
  Farmacia.findById(id)

})

module.exports = router