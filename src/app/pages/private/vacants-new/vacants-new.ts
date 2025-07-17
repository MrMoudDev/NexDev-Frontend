import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Vacant } from '../../../services/vacant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacants-new',
  imports: [ReactiveFormsModule],
  templateUrl: './vacants-new.html',
  styleUrl: './vacants-new.css'
})
export class VacantsNew {
  public formdata!: FormGroup

  constructor (
    private vacantService:Vacant,
    private router: Router) {
      this.formdata = new FormGroup ({
        titulo: new FormControl(),
        descripcion: new FormControl(),
        tecnologias: new FormControl(),
        salario: new FormControl(),
        beneficios: new FormControl(),
        tareas: new FormControl(),
        fechaPublicacion: new FormControl(),
        fechaCierre: new FormControl()
      })
    }
          ngOnInit () {

      }

      onSubmit(){
        if(this.formdata.valid){
          this.vacantService.registerVacant(this.formdata.value).subscribe({
            next: (res)=> {
              console.log(res)
            },
            error: (error)=> {
              console.log(error)
            },
            complete: ()=> {
              console.log('alv')
            }

          })
        }
      }
}
