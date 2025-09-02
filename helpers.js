// Reverse a string
const reverseString = (string) => {
  return [...string].reverse().join('')
}

// Shorten a string to 50 characters
const shortenString = (string) => {
  return string.length > 50 ? string.substring(0, 50) + '...' : string
}

// Export the functions
module.exports = {
  reverseString,
  shortenString
}
