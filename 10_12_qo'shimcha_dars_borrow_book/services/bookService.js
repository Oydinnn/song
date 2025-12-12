export class BookService{
  constructor(){
    this.books = []
  }

  addBook(book){
    this.books.push(book)
  }

  getAllBooks(){
    return this.books
  }

  findBookById(id){
    return this.books.find(book => book.id === id)
  }

  borrowBook(bookId, user){
    return new Promise((resolve, reject) => {
      const book = this.findBookById(bookId)

      if(!book){
        return reject(new Error("bunday kitob mavjud emas"))
      }
      book.isBorrowed = true
      user.borrowedBooks.push(book)

      resolve(`${user.name} ${book.title}ni oldi`)
    })
  }

  returnBook(bookId, user){
    return new Promise((resolve, reject) => {
      const book = this.findBookById(bookId)

      if(!book) return reject(new Error('bunday kitob mavjud emas'))
      if(!book.isBorrowed) return reject(new Error('bu kitob olinmagan'))

      const index = user.borrowedBooks.findIndex(b => b.id === bookId)
      if(index == -1) return reject( new Error('ushbu kitob bu foydalanuvchida emas'))

      book.isBorrowed = false
      user.borrowedBooks.splice(index, 1)

      resolve(`${book.title} kitobini ${user.name} qaytardi`)
    })
  }
}