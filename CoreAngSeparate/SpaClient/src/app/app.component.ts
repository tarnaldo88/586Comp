import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit {
  li:any; 
  lis=[]; 
  constructor(private http : HttpClient){

  }
  ngOnInit(): void { 
    this.http.get('http://54.67.104.178/Server/api/Authors') 
    .subscribe(Response => { 
  
      // If response comes hideloader() function is called 
      // to hide that loader  
      if(Response){   
        hideloader(); 
      } 
      console.log(Response) 
      this.li=Response; 
      this.lis=this.li.list; 
    }); 
    function hideloader(){ 
      document.getElementById('loading').style.display = 'none';} 
  }
}

// export class AppComponent {
//   title = 'app';
// }
