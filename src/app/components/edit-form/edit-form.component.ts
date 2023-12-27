import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Repas } from 'src/app/model/repas.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
  plats: any = {}
  id: any
  data:any={}
  obj:any={}
  constructor(private crudService: CrudService,private activatedrouter:ActivatedRoute) { }
  ngOnInit() {
    this.id=this.activatedrouter.snapshot.paramMap.get("id")
    if (this.id != null && this.id != undefined){
      this.getPlatById()
  }}
  getPlatById(){
    this.data=JSON.parse(localStorage.getItem("plats") || '[]')
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id ==this.id) {
        this.obj=this.data[i]
  }}}
  getAllRepas() {
    this.crudService.getAllRepas().subscribe(
      (response: Repas[]) => {
        this.plats = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
  updateRepas(repas: Repas): void {
    const button = document.getElementById("idbtn");
    if (button) {
      button.click();
    }
    this.crudService.updateRepas(repas).subscribe(
      (response: Repas) => {
        console.log(response);
        this.getAllRepas();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      },
    );

  }
}
