import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = ""

  @Input()
  cardTitle: string = ""

  @Input()
  id: string = ""

  constructor() { }

  ngOnInit(): void {
    
  }
}
