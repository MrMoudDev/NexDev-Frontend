import { Component } from '@angular/core';
import { Vacant } from '../../../services/vacant';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vacants',
  imports: [],
  templateUrl: './vacants.html',
  styleUrl: './vacants.css'
})
export class Vacants {


      vacant: any[] = [];

    constructor ( private aplicationService: Vacant) {}
      ngOnInit () {
        console.log('aaaaaaa')
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
