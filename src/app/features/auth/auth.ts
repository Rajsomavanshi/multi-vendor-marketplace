import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './auth.css',
  templateUrl: './auth.html',
})
export class Auth {}
