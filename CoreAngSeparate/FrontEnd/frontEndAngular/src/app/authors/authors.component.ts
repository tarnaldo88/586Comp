import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Authors {
  constructor(
    public AuthorId: number,
    public Name: string
  ) {
  }
}

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: Authors[] = [];
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getAuthors();
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
