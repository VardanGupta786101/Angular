import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: { topic: string, skills: string[] }[] = [
    {
      topic: 'Language',
      skills: ['Java', 'Python', 'Golang', 'C', 'C++']
    },
    {
      topic: 'Front End',
      skills: ['Angular', 'HTML', 'CSS', 'Bootstrap']
    },
    {
      topic: 'Databases',
      skills: ['Postgres', 'MySQL', 'MongoDB']
    },
    {
      topic: 'Framework',
      skills: ['Spring', 'Spring Boot', 'Hibernate', 'Django']
    },
    {
      topic: 'DevOps',
      skills: ['Git', 'GitHub', 'GitLab']
    },
    {
      topic: 'Programming',
      skills: ['Debugging', 'Agile', 'Problem Solving']
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
