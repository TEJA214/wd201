const http = require('http')
const fs = require('fs')
const minimist = require('minimist')

let homeContent = ''
let projectContent = ''
let registrationContent = ''

// Read home.html content
fs.readFile('home.html', (err, home) => {
  if (err) {
    throw err
  }
  homeContent = home
})

// Read project.html content
fs.readFile('project.html', (err, project) => {
  if (err) {
    throw err
  }
  projectContent = project
})

// Read registration.html content
fs.readFile('registration.html', (err, registration) => {
  if (err) {
    throw err
  }
  registrationContent = registration
})

const argv = minimist(process.argv.slice(2))
const port = argv.port || 5000 // Default to port 5000 if not specified

const server = http.createServer((request, response) => {
  const url = request.url
  response.writeHead(200, { 'Content-Type': 'text/html' })

  switch (url) {
    case '/registration':
      response.write(registrationContent)
      break
    case '/project':
      response.write(projectContent)
      break
    default:
      response.write(homeContent)
      break
  }

  response.end()
})

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})