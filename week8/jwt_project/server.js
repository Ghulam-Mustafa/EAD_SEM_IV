const express = require('express') // Import Express framework
const app = express()              // Create an Express app instance
const jwt = require('jsonwebtoken')// Import JSON Web Token library for authentication


require('dotenv').config()         // Load environment variables from .env file


app.use(express.json())            // Middleware to parse JSON bodies from incoming requests


// Sample posts data - each post has a name and a title
const posts = [
  {
    branch: "IT-3",
    title: "Welcome to IT-3"
  },
  {
    branch: "CSE-2",
    title: "Welcome to CSE-2"
  }
]


// Middleware to authenticate JWT tokens
const authenticateToken = (req, res, next) => {
  // Get the Authorization header (expected format: "Bearer <token>")
  const authHeader = req.headers['authorization']
  // Extract the token part from the header
  const token = authHeader && authHeader.split(' ')[1]


  // If no token found, respond with 401 Unauthorized
  if (!token) return res.sendStatus(401)


  // Verify the token with the secret key from environment variables
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) {
      // If token verification fails, respond with 403 Forbidden
      return res.sendStatus(403)
    }
    // Attach decoded user info to request object for use in next handlers
    req.user = user
    next() // Continue to next middleware or route handler
  })
}


// POST /login route to authenticate user and issue a JWT token
app.post('/login', (req, res) => {
  const userbranch = req.body.userbranch // Extract username from request body
  const user = { branch: userbranch }    // Create a user payload with the username
  // Sign a JWT token with user payload and secret key
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)
  // Send the token back in JSON response
  res.json({ token: accessToken })
})


// Apply authentication middleware to all routes below this line
app.use(authenticateToken)


// GET /posts route - returns posts filtered by authenticated user's name
app.get('/posts', (req, res) => {
  console.log(req.user.branch) // Log the authenticated username
  // Filter posts to only those matching the logged-in user and send JSON response
  res.json(posts.filter(post => post.branch === req.user.branch))
})


// Start the Express server on port 3000
app.listen(3000, () => console.log("Server running on port 3000"))
