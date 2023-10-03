import { Component, Input, OnInit } from "@angular/core"
import { Icategory } from "src/app/Models/icategory"
import { Iproduct } from "src/app/Models/iproduct"
import { Store } from "src/app/Models/store"


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
// productName : string="Headphone"
// productPrice : number=1000
// productQuantity : number = 500

categoriesList:Icategory[]=[{id:1,name:"Table"},{id:2,name:"Sofa"},{id:3,name:"Chair"}]
clientName : string = "ola "
cardNumber:string="2222444466668888"

storeData:Store =new Store("Home Sweet Home",["Sohag","Quena","Cairo"],"https://th.bing.com/th/id/R.763bc097f722d4fcdae90409b3fd012c?rik=CPZrCMkaRb7n2Q&pid=ImgRaw&r=0")

filteredProducts:Iproduct[]=[]

//by category name:
@Input() set listFilter(value:string){
  console.log("filtervalue",value);
  
this.filteredProducts= this.performFilter(value)
}



productList:Iproduct[]
// categpries : tablesId =1 , sofa = 2,chairs=3
constructor(){
  this.productList=[
    {id:1,name:"wilma glass Table",quantity:0,price:1000,counter:0,imgUrl:"https://media.homecentre.com/i/homecentre/165305118-165305118-HC14022023_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$",categoryId:1},
    {id:2,name:"Tiller Terazo Table",quantity:40,price:999,counter:0,imgUrl:"https://media.homecentre.com/i/homecentre/164658652-164658652-HC22122022_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$",categoryId:1},
    {id:3,name:"Helios glass table",quantity:100,price:799,counter:0,imgUrl:"https://media.homecentre.com/i/homecentre/161873323-161873323-HC260819_02-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$",categoryId:1},
    {id:4,name:"Murano fabric sofa",quantity:50,price:2999,counter:0,imgUrl:"https://media.homecentre.com/i/homecentre/161636061-161636061-HC310719_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$",categoryId:2},
    {id:5,name:"Colorado fabric sofa",quantity:100,price:1874,counter:0,imgUrl:"https://media.homecentre.com/i/homecentre/165214548-165214548-HC17012023_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$",categoryId:2},
    {id:6,name:"Margo fabric sofa",quantity:80,price:1274,counter:0,imgUrl:"https://media.homecentre.com/i/homecentre/164989290-164989290-HC20012023_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$",categoryId:2},
    {id:7,name:"Kaleidoscope Velvit chair",quantity:90,price:499,counter:0,imgUrl:"https://media.homecentre.com/i/homecentre/161190403-161190403-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$",categoryId:3},
   { id:8,name:"Nuevo fabric chair",quantity:90,price:546,counter:0,imgUrl:"https://media.homecentre.com/i/homecentre/163815640-163815640-HC13122021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$",categoryId:3},
   {id:9,name:"Mono dinning chair",quantity:1,price:524,counter:0,imgUrl:"https://media.homecentre.com/i/homecentre/165589829-165589829-HC25052023_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$",categoryId:3}

  ]
}
  ngOnInit(): void {
   this.filteredProducts=this.productList;
  }

IsPurshased :boolean=true;
toggleImage(){
  //every time user click on the button , set IsPurshased value the opposite value
  this.IsPurshased=!this.IsPurshased;
 
}
// filter by category name:
performFilter(filterValue:string):Iproduct[]{
filterValue=filterValue.toLowerCase();

return this.productList.filter((product:Iproduct)=>product.name.toLowerCase().includes(filterValue))
}

decreaseProductQuantity(product:Iproduct):void{
  if(product.quantity>0){
  product.quantity--
  }
  }


  date1:Date= new Date();
}

