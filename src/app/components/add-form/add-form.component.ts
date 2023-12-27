import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
plat:any={}

constructor(private route:Router){}
ngOnInit(){
}
addplat(){
  let data=JSON.parse(localStorage.getItem("plats") || '[]')
   this.plat.id=data.length ==0 ? 0 : data.at(-1).id+1 
   data.push(this.plat)
   localStorage.setItem('plats', JSON.stringify(data));
}
}
