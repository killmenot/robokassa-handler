'use strict'

const http = require('http')
const express = require('express')

function handleResponse (req, res) {
  console.log('req.headers', req.headers)
  console.log('req.query', req.query)
  console.log('req.body', req.body)
}

module.exports = () => {
  const app = express()

  app.use(express.urlencoded({ extended: false }));

  app.post('/result-url', (req, res, next) => {
    try {
      handleResponse(req, res)

      res.status(200).json({
        success: true,
        message: 'Successfully received message'
      })
    } catch (err) {
      next(err)
    }
  })

  app.post('/success-url', (req, res, next) => {
    try {
      handleResponse(req, res)

      res.status(200).json({
        success: true,
        message: 'Successfully received message'
      })
    } catch (err) {
      next(err)
    }
  })

  app.post('/fail-url', (req, res, next) => {
    try {
      handleResponse(req, res)

      res.status(200).json({
        success: true,
        message: 'Successfully received message'
      })
    } catch (err) {
      next(err)
    }
  })

  app.use((err, req, res, next) => {
    console.log(err)

    res.json({
      ok: true
    })
  })

  app.server = http.createServer(app)

  return app
}
