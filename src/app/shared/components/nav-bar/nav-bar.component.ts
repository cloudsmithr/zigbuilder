import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  @Input() navBarStyle!: string;  
  @Input() navStructure: object[] = [];

  ngOnInit(): void {
  }
}
