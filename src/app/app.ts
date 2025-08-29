import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { environment } from '../environments/environment';

<<<<<<< HEAD
import { environment } from '../environments/environment';

console.log( "environment", environment);

=======
console.log('Envieronments: ', environment)
>>>>>>> refs/remotes/origin/main
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Frontend';
}
