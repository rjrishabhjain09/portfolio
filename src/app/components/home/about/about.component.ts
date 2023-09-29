import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
aboutme:any =[];

  constructor(
  ) { }

  ngOnInit(): void {

let startDate:any = new Date(2021,6,1);
let endDate:any = new Date();

const startYear = startDate.getFullYear();
const startMonth = startDate.getMonth();
const endYear = endDate.getFullYear();
const endMonth = endDate.getMonth();

const experience =(((endYear - startYear) * 12 + (endMonth - startMonth))/12).toFixed(1);


    this.aboutme = [
      `In my <span class='underline'> ${experience} years as a developer</span>, I seek to train every day. I have worked writing <span class='underline'>clean and responsive codes</span>, <span class='underline'>performing continuous integration</span>, and covering backend developer roles with <span class='underline'>Node.js and Postgres</span>. I have led teams having empathy, exercising motivation to partners, and setting plans and goals together.`,
      "My skills also include implementing system improvements, optimizing sites, standardizing patterns, and suggesting and executing ideas that add value to the project I'm working on.",
      "Some of the technologies that I have trained and worked on include (but are not limited to):"
  ]
  }

}
