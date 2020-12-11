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

export class Authors {
  constructor(
    public AuthorId: number,
    public Name: string
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
  authors: Authors[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getBooks();
    this.getAuthors();
  }

  getBooks(){
    this.httpClient.get<any>('http://54.67.104.178/Server/api/Books').subscribe(
      response => {
        console.log(response);
        this.books = response;
      }
    );
  }

  getAuthors(){
    this.httpClient.get<any>('http://54.67.104.178/Server/api/Authors').subscribe(
      response => {
        console.log(response);
        this.authors = response;
      }
    );
  }
}
