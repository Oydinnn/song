import {Book} from "./models/book.js"
import {User} from "./models/user.js"
import {BookService} from "./services/bookService.js"
import {UserService} from "./services/userService.js"

async function main(){

  const bookService = new BookService()
  const userService = new UserService()

  const u1 = new User(1, "ali")
  const u2 = new User(2, "vali")
  const u3 = new User(3, "alim")

  userService.addUser(u1)
  userService.addUser(u2)
  userService.addUser(u3)

  const b1 = new Book(1, "tarix", "O'.Xoshimov", 2020)
  const b2 = new Book(2, "matem", "Tuychiyev", 2000)
  const b3 = new Book(3, "biologiya", "Saodat", 2025)

  bookService.addBook(b1)
  bookService.addBook(b2)
  bookService.addBook(b3)

  // bor kitobni olish uchun
  try {
    const b = await bookService.borrowBook(1, u2)
    console.log(b);
  } catch (error) {
    console.error("Xato:", error.message)
  }

  // yo'q kitobni olish uchun
  try {
    await bookService.borrowBook(11, u1)
  } catch (error) {
    console.error("Xato:", error.message)
  }

  // bor kitobni qaytarish
  try {
    const k = await bookService.returnBook(1, u2)
    console.log(k);
  } catch (error) {
    console.error("Xato:", error.message)
  }

  // yo'q kitobni qaytarish
  try {
    await bookService.returnBook(11, u1)
  } catch (error) {
    console.error("Xato:", error.message)
  }

  console.log("All users", userService.getAllUsers());
  console.log("All books", bookService.getAllBooks());
}
main()




