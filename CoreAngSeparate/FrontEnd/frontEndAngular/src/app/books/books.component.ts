import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Books {
  constructor(
    public BookId: number,
    public AuthorId: number,
    public title: string,
    public price: number
  ) {
  }
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Books[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.httpClient.get<any>('http://54.67.104.178/Server/api/Books').subscribe(
      response => {
        console.log(response);
        this.books = response;
      }
    );
  }
}
