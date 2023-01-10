import { Component, OnInit } from '@angular/core';
import { CvdanielService } from '../services/cvdaniel.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor( public cv: CvdanielService) { }

  ngOnInit(): void {
   
    
  }

}
