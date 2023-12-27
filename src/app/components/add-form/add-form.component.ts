import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Repas } from 'src/app/model/repas.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent {
  plats: any = {}

  constructor(private route: Router, private crudService: CrudService) { }
  ngOnInit() {
    this.getAllRepas()
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
  addRepas(addForm: NgForm): void {
    const button = document.getElementById("idbtn");
    if (button) {
      button.click();
    }
    this.crudService.CreateRepas(addForm.value).subscribe(
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
