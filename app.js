// Import Express and set up the app
const express = require('express')
const app = express()
const routes = require('./routes')
const { handle404, handleGlobalError } = require('./errorHandlers')

app.use('/', routes)

// Error handler for handling non-existent routes
app.use(handle404)

// Global error handler
app.use(handleGlobalError)

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
