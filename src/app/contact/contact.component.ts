import { Component, OnInit } from '@angular/core';
import { CvdanielService } from '../services/cvdaniel.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor( public cv: CvdanielService) { }

  ngOnInit(): void {

  }

}
