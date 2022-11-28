import { Component } from '@angular/core';

@Component({
  selector: 'app-food-search',
  templateUrl: './food-search.component.html',
  styleUrls: ['./food-search.component.css']
})
export class FoodSearchComponent {

  title=""

  readValues=()=>
  {
    let data:any={"title":this.title}
    console.log(data)
  }


}
