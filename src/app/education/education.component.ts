import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  educationDetails: any[] = [
    {
      institution: 'Thakur Shivkumar Singh Memorial College',
      location: 'Burhanpur, India',
      degree: 'B.Tech, Computer Science Engineering',
      duration: 'August 2018 — April 2022'
    },
    {
      institution: 'Nehru Montessori Senior Secondary School',
      location: 'Burhanpur, India',
      degree: '12th class',
      duration: 'June 2017 – January 2018'
    },
    {
      institution: 'Nehru Montessori Senior Secondary School',
      location: 'Burhanpur, India',
      degree: '10th class',
      duration: 'April 2015 – January 2016'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
