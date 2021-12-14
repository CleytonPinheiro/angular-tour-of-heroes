import { Component, OnInit, Input } from '@angular/core';
import { PODERES } from '../power';

@Component({
  selector: 'app-hero-power',
  templateUrl: './hero-power.component.html',
  styleUrls: ['./hero-power.component.css']
})
export class HeroPowerComponent implements OnInit {

  @Input()power?: "teste";

  constructor() { }

  ngOnInit(): void {
  }

}
