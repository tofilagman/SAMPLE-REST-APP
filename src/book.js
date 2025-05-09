let books = []

exports.getAll = (req, res) => { 
  res.json(getBooks());
}

exports.create = (req, res) => {
  const book = req.body
  books.push(book) 
  res.json(book.toString())
}

exports.getById = (req, res) => {
  const id = parseInt(req.params.id)
  const book = books.find((t) => t.id === id)
  if (!book) {
    res.status(404).send()
  } else {
    res.send(book)
  }
}

exports.update = (req, res) => {
  const id = parseInt(req.params.id)
  const book = books.find((t) => t.id === id)
  if (!book) {
    res.status(404).send()
  } else {
    const newbook = req.body
    books = books.map((t) => (t.id === id ? newbook : t))
    res.send(newbook)
  }
}

exports.delete = (req, res) => {
  const id = parseInt(req.params.id)
  books = books.filter((t) => t.id !== id)
  res.status(204).send()
}

const getBooks = () => {
  return books.map(x=> JSON.parse(x.toString()));
}