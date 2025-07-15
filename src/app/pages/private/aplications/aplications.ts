import { Component } from '@angular/core';
import { Aplication } from '../../../services/aplication';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aplications',
  imports: [ RouterLink],
  templateUrl: './aplications.html',
  styleUrl: './aplications.css'
})
export class Aplications {

    aplication: any[] = [];

  constructor ( private aplicationService: Aplication) {}
    ngOnInit () {
      this.aplicationService.getAplication().subscribe({
        next: (data) => {
          this.aplication = data
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
  onDelete (id:string) {
    console.log('Elimina la aplicacion con ID: ' + id)
    this.aplicationService.deleteByIdAplication(id).subscribe({
      next: (data) => {
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
}
