const express = require('express')
const swagger = require('../../src/swagger'); 
const todo = require('../../src/todo')
const book = require('../../src/book');
const serverless = require("serverless-http");

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
 * @summary delete todo item with specified id
 * @param {number} id.path - id of todo item
 * @return {object} 200 - success response
 */
app.delete('/todos/:id', todo.delete)

//---------------------------------------------

/**
   * BOOK
   * @typedef {object} Book
   * @property {number} id.required - Id
   * @property {string} title.required - Book Title
   * @property {number} year - Year published
   */

/**
 * GET /books
 * @summary returns all books
 * @return {array<object>} 200 - success response
 */
app.get('/books', book.getAll)

/**
 * POST /books
 * @summary create a book
 * @param {Book} request.body.required - item info
 * @return {object} 200 - success response
 */
app.post('/books', book.create) 

/**
 * GET /books/{id}
 * @summary returns all books with specified id
 * @param {number} id.path - id of book
 * @return {object} 200 - success response
 */
app.get('/books/:id', book.getById)

/**
 * PUT /books/{id}
 * @summary update book with specified id
 * @param {number} id.path - id of book
 * @param {Book} request.body.required - book info
 * @return {object} 200 - success response
 */
app.put('/books/:id', book.update)

/**
 * DELETE /books/{id}
 * @summary delete book with specified id
 * @param {number} id.path - id of book
 * @return {object} 200 - success response
 */
app.delete('/books/:id', book.delete)

swagger(app);

// var httpServer = http.createServer(app);
 
// httpServer.listen(80);
 
module.exports = serverless(app);

// var privateKey = fs.readFileSync(__dirname + "/../certs/selfsigned.key", 'utf-8');
// var cert = fs.readFileSync(__dirname + "/../certs/selfsigned.crt", 'utf-8');
// var creds = {
//   key: privateKey,
//   cert: cert
// }
// var httpsServer = https.createServer(creds, app);
// httpsServer.listen(443);
