let books = []

exports.getAll = (req, res) => { 
  res.json(books);
}

exports.create = (req, res) => {
  const book = req.body
  const pb = JSON.parse(book.toString());
  pb.id = getRandomInt(1000, 9999);
  books.push(pb) 
  res.json(pb)
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
    const pb = JSON.parse(newbook.toString());
    books = books.map((t) => (t.id === id ? pb : t))
    res.send(pb)
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


const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.trunc(Math.random() * (max - min + 1)) + min; // Inclusive of min and max
}