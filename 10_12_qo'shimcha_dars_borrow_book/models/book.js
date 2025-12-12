export class Book{
  constructor(id, title, author, year, isBorrowed = false){
    this.id = id,
    this.title = title,
    this.author = author,
    this.year = year,
    this.isBorrowed = isBorrowed
  }
}

