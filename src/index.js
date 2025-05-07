const express = require('express')
const swagger = require('./swagger')
const todo = require('./todo')
const http = require("http");
const https = require("https");
const fs = require("fs");

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hey! its working!')
})

/**
   * TODO
   * @typedef {object} Todo
   * @property {number} id.required - Id
   * @property {name} name - Todo Name
   * @property {boolean} completed - Status
   */

/**
 * GET /todos
 * @summary returns all todo list
 * @return {array<object>} 200 - success response
 */
app.get('/todos', todo.getAll)

/**
 * POST /todos
 * @summary create a todo item
 * @param {Todo} request.body.required - item info
 * @return {object} 200 - success response
 */
app.post('/todos', todo.create) 

/**
 * GET /todos/{id}
 * @summary returns all todo item with specified id
 * @param {number} id.path - id of todo item
 * @return {object} 200 - success response
 */
app.get('/todos/:id', todo.getById)

/**
 * PUT /todos/{id}
 * @summary update todo item with specified id
 * @param {number} id.path - id of todo item
 * @param {Todo} request.body.required - item info
 * @return {object} 200 - success response
 */
app.put('/todos/:id', todo.update)

/**
 * DELETE /todos/{id}
 * @summary update todo item with specified id
 * @param {number} id.path - id of todo item
 * @return {object} 200 - success response
 */
app.delete('/todos/:id', todo.delete)

swagger(app);

var httpServer = http.createServer(app);
 
httpServer.listen(80);
 
// var privateKey = fs.readFileSync(__dirname + "/../certs/selfsigned.key", 'utf-8');
// var cert = fs.readFileSync(__dirname + "/../certs/selfsigned.crt", 'utf-8');
// var creds = {
//   key: privateKey,
//   cert: cert
// }
// var httpsServer = https.createServer(creds, app);
// httpsServer.listen(443);
