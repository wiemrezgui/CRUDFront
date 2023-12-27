import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  plat:any={}
  id:any
  data:any={}
  obj:any={}
  constructor(private activatedroute:ActivatedRoute){}
  ngOnInit(){
    this.id=this.activatedroute.snapshot.paramMap.get("id")
    if (this.id != null && this.id != undefined){
      this.getplatById()
    }
  }
  getplatById(){
    this.data=JSON.parse(localStorage.getItem("plats") || '[]')
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id ==this.id) {
        this.plat=this.data[i]
  }}}
    editplat(){
      this.data=JSON.parse(localStorage.getItem("plats") || '[]')
      this.data[this.id]=this.plat
      localStorage.setItem("plats", JSON.stringify(this.data));
  
    }
}
