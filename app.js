// Import Express and set up the app
const express = require('express')
const app = express()
const routes = require('./routes')
const { handle404, handleGlobalError } = require('./errorHandlers')

app.use('/', routes)

/*
 * Helpers for Various Tasks
 */

// Helper function to reverse a string
const reverseString = (string) => [...string].reverse().join('')

// Helper function to shorten a string to fifty characters
const shortenString = (string) => {
  return string.length > 50 ? string.substring(0, 50) + '...' : string
}

/*
 * 404 and Global Error Handlers
 */

// Error handler for handling non-existent routes
app.use(handle404)

// Global error handler
app.use(handleGlobalError)

// Turn on Express server
app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
