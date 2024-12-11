import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasicsComponent } from './Components/basics/basics.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BasicsComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project18v';
}
