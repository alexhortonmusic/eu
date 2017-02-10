'use strict'

const express = require('express')
const { json } = require('body-parser')
const mongoose = require('mongoose')

const routes = require('./routes/')

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'pug')

// middleware
app.use(express.static('public'))
app.use(json())

// routes
app.use(routes)

app.listen(PORT)
