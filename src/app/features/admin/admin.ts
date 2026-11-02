import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink],
  styleUrl: './admin.css',
  templateUrl: './admin.html',
})
export class Admin {}
