import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { BooksDTO } from '../../../models/books.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: BooksDTO[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getAllBooks().subscribe(books => this.books = books);
  }

  editBook(id: number): void {
    this.router.navigate(['/books/edit', id]);
  }
}
