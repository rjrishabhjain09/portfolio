import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  active = 0;
  jobs:any=[];
  
  constructor( ) { }

  ngOnInit(): void {

    this.jobs = [
      {
      "Tab": "Akal Information LTD.", 
      "Title": "Fullstack Developer",
      "Date": "March 2021 - Present",
      "Description": [
        "Creation and maintenance of REST APIs using Node.Js, Express and sometimes also in Java using Spring Boot framework",
        "Developement and Maintaince of Function in Sql(PostgreSQL) and Services in NoSql(AWS DynamoDB) to resuce load while using Node.",
        "Implementation of continuous integration and daily backups.",
        "Creation and maintenance of Platforms Done in Angular, Node, PostgreSQL, RxJS, (s)css, responsiveness, and user management and configuration of general parameters.",
        "Strong understanding of authentication, authorization, and security principles.",
        "Familiar with cloud platforms like Azure for deploying and managing applications."

      ]
  },
  {
      "Tab": "ShapeAI [Dev Town]",
      "Title": "Data Analyst",
      "Date": "September 2021 – November 2021",
      "Description": [
        "Working with ShapeAI made me develop projects in the fields of AI/ML/Deep learning & Data Analysis ",
        "Expertise in visualizing and manipulating big datasets ", 
        "Performed Many Techniques & Tools like Data Mining /Data Interpretation, Pandas, Numpy, Data Visualisation etc. ",
      ]
  },
  {
      "Tab": "Cureya HealthCare LTD.",
      "Title": "ML (Intern)",
      "Date": "July 2021 – September 2021",
    "Description": [

      "Research and implement appropriate ML algorithms, statistical analysis, and fine-tuning using test results ", "Developed Many Projects Using ML/DL Algorithms and implemented Python and basic libraries for ML/DL such as scikit-learn,TensorFlow ",
      "Well versed with to select appropriate datasets and datarepresentation methods. "
    ]
  }
]
  }

}
