import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  workExperience = [
    {
      company: 'Cleartrail Technologies Pvt. Ltd @Klera.io',
      location: 'Indore, India',
      title: 'Associate Software Engineer',
      startDate: 'March 2022',
      endDate: 'May 2023',
      description: [
        'Contributed to the development, enhancement, and optimization of the Klera Product, a data analysis software solution.' ,
        'Worked in an Agile team following Scrum methodology with a 3-month sprint cycle and managed tasks through Jira.' ,
        'Utilized debugging skills for Root Cause Analysis (RCA) for providing critical stories and bug fixes for the product.' ,
        'As the component owner for \'License\', \'Connectors\', and \'Form\', successfully delivered 5 major feature enhancements and resolved 50+ bugs reported.' ,
        'Implemented multitenant architecture for the \'Connector\' and \'License\' to support concurrent access across 10+ organizations.' ,
        'Implemented a flow to load and delete the connector at the time of service startup, reducing memory usage by 7 percent.'
    ],
      technologiesUsed: [
        'Core Java',
        'Hibernate',
        'Git/Gitlab',
        'Jira',
        'SQL',
        'NoSQL',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Restful API'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
