'use strict';

const { Router } = require('express')
const router = Router()

router.get('/', (req,res) => {
  res.render('index')
})

router.post('/', (req, res, err) => {
  console.log(req)
  res.redirect('/')
})

module.exports = router
