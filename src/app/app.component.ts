import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showDetails= false;
  buyButton= false;
  tshirts = [];
  tshirtdetails:any;
  addtocart(p){
    this.tshirtdetails=p;
    this.showDetails=true;
    this.buyButton=true;
  }
  cancel(d){
    this.showDetails=false;
    this.buyButton=false;
  }
  update(d):void{
    console.log(d.tshirtId);
    this.showDetails=false;
    this.buyButton=false;
  }
  title = 'MasterDetails';
  imageWidth=175;
  imageHeight=225;
  products: any=[];
  ngOnInit(){
    this.products=this.getTshirts();
   
}


  getTshirts() {
    return [
      {
        "tshirtId": 1,
        "productCode": "MAN-0011",
        "releaseDate": "March 19,2019",
        "tshirtPrice": 10.45,
        "name":"Black top",
        "description":"A black top for girls",
        "frontImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/1.jpg?raw=true",
        "backImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/1.1.jpg?raw=true"
,
        "inStock": 30,
        "tshirtColor": "black",
        "tShirtRating": 3.2,
        "size" : "large",
        "imgSrc":'',
      },
      {
        "tshirtId": 2,
        "productCode": "REDMAN-0011",
        "releaseDate":"April 18,2018",
        "tshirtPrice": 100.45,
        "name":"Polo T-Shirt",
        "description":"A multicolored polo T-Shirt for girls",
        "frontImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/2.jpg?raw=true",
        "backImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/2.2.jpg?raw=true",
        "inStock": 27,
        "tshirtColor": "blue",
        "tShirtRating": 4.3,
        "size": "medium",
        "imgSrc":'',
      }, 
      {
        "tshirtId": 3,
        "productCode": "GREEN-0012",
        "releaseDate":"May 17,2019",
        "tshirtPrice": 90.45,
        "name":"Casual T-shirt",
        "description":"A casual dark green T-Shirt for girls",
        "frontImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/3.jpg?raw=true",
        "backImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/3.3.jpg?raw=true",
        "inStock": 40,
        "tshirtColor": "dark green",
        "tShirtRating": 2,
        "size":"small",
         "imgSrc":'',
      }, 
      {
        "tshirtId": 4,
        "productCode": "BLACK-0045",
        "releaseDate":"September 10,2019",
        "tshirtPrice": 20.3,
        "name":"Striped Sweatshirt",
        "description":"A black and white striped sweatshirt for boys",
        "frontImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/5.jpg?raw=true",
        "backImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/5.5.jpg?raw=true",
        "inStock": 20,
        "tshirtColor": "black and white",
        "tShirtRating": 2.2,
        "size":"large",
         "imgSrc":'',
      } ,
      {
        "tshirtId": 5,
        "productCode":"YELLOW-0035",
        "releaseDate":"Decemeber 10,2019",
        "tshirtPrice": 210.45,
        "name":"Sports T-Shirt",
        "description":"A sportswear yellow T-Shirt for girls",
        "frontImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/7.jpg?raw=true",
        "backImageUrl": "https://github.com/daniahasan/T-shirt-application/blob/master/src/assets/images/7.7.jpg?raw=true",
        "inStock":26,
        "tshirtColor": "yellow",
        "tShirtRating": 5,
        "size":"medium",
         "imgSrc":'',
      }
    
    ]
  }
}
  
