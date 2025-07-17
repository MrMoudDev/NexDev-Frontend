import { Component } from '@angular/core';
import { Vacant } from '../../../services/vacant';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacants',
  imports: [ReactiveFormsModule],
  templateUrl: './vacants.html',
  styleUrl: './vacants.css'
})
export class Vacants {
public formData!:FormGroup;
  vacant: any[] = [];

    constructor ( private aplicationService:Vacant) {
      this.formData=new FormGroup({
        tituloV: new FormControl(),
        descriptionV: new FormControl(),
        tecnologiasV: new FormControl(),
      })
    }
      ngOnInit () {
        this.aplicationService.getVacant().subscribe({
          next: (data) => {
            this.vacant = data
            console.log(data)
          },
          error: (error) => {
            console.log(error)
          },
          complete: () => {
            console.log('complete')
          }
        })
      }

      a(){
        alert('postulandose')
      }
}
