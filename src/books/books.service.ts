import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.interface';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private nextId = 1;

  create(createBookDto: CreateBookDto): Book {
    const book: Book = {
      id: this.nextId++,
      ...createBookDto,
    };

    this.books.push(book);

    return book;
  }

  findAll(category?: string): Book[] {
    if (!category) {
      return this.books;
    }

    return this.books.filter(
      (book) => book.category.toLowerCase() === category.toLowerCase(),
    );
  }

  findOne(id: number): Book {
    const book = this.books.find((currentBook) => currentBook.id === id);

    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    return book;
  }

  update(id: number, updateBookDto: CreateBookDto): Book {
    const bookIndex = this.books.findIndex(
      (currentBook) => currentBook.id === id,
    );

    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    const updatedBook: Book = {
      id,
      ...updateBookDto,
    };

    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  remove(id: number): Book {
    const bookIndex = this.books.findIndex(
      (currentBook) => currentBook.id === id,
    );

    if (bookIndex === -1) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }

    const [deletedBook] = this.books.splice(bookIndex, 1);
    return deletedBook;
  }
}
