import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Repas } from 'src/app/model/repas.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  plats:Repas[]=[];
  constructor(private route:Router,private crudService:CrudService ){}
  ngOnInit(){
    this.getAllRepas() ;
  }
  navigate(){
    this.route.navigate(['/add'])
  }
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
  
  deleteRepas(id:any): void {
    this.crudService.deleteRepas(Number(id)).subscribe(
      (response: void) => {
        this.getAllRepas();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      },

    );
  }
  navigateToEdit(id:any,str:any){
    this.route.navigate(['/'+str+'/'+id])
    }
}
