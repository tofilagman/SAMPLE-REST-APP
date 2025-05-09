const express = require('express')
const swagger = require('../../src/swagger'); 
const todo = require('../../src/todo')
const book = require('../../src/book');
const serverless = require("serverless-http");

const app = express()

app.use(express.json())

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hey! its working!')
})

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
router.get('/books', book.getAll)

/**
 * POST /books
 * @summary create a book
 * @param {Book} request.body.required - item info
 * @return {object} 200 - success response
 */
router.post('/books', book.create) 

/**
 * GET /books/{id}
 * @summary returns all books with specified id
 * @param {number} id.path - id of book
 * @return {object} 200 - success response
 */
router.get('/books/:id', book.getById)

/**
 * PUT /books/{id}
 * @summary update book with specified id
 * @param {number} id.path - id of book
 * @param {Book} request.body.required - book info
 * @return {object} 200 - success response
 */
router.put('/books/:id', book.update)

/**
 * DELETE /books/{id}
 * @summary delete book with specified id
 * @param {number} id.path - id of book
 * @return {object} 200 - success response
 */
router.delete('/books/:id', book.delete)

swagger(router);
 
 
app.use("/app", router);  

exports.handler = serverless(app);