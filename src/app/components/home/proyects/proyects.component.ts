import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout:4000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;

  projects:any =[]

  constructor(
  ) { }

  ngOnInit(): void {

this.projects=[
//   {
//   "Title": "Expo Bazaar",
//   "Description": "Expobazaar is an e-commerce website developed using a tech stack consisting of <span class='underline'> Node.js for server less functions, AngularJS for the front-end, and AWS DynamoDB for data storage</span>.The goal of this project is to provide user-friendly online shopping experience, showcasing a wide range of products. Monitoring application and implementing new features for smooth user experience.",
//   "imgs": [
//       "assets/images/projects/expo-mainpage.png",
//       "assets/images/projects/exposignin.png",
//       "assets/images/projects/expobazaar.com_kitchen-dining.png",
//       "assets/images/projects/product img.png",
//       "assets/images/projects/cart page1.png",
//       // "assets/images/projects/cart2.png",
//       "assets/images/projects/cart 3.png",
//       "assets/images/projects/cart 4.png",
//       // "assets/images/projects/loading payment.png",
//       "assets/images/projects/payment done.png",
//       "assets/images/projects/order invoices.png",
//       "assets/images/projects/transaction history.png"
//   ],
//   "demoLink": "https://expobazaar.com/",
//   "Technologies": ["NodeJS", "Angular", "AWS DynamoDB", "Express.Js","RxJS"]
// },
{
  "Title": "Contract-Jobs",

  "Description":"This project featured <span class='underline'>JWT token authentication</span>, <span class='underline'>role-based access</span> control, and <span class='underline'>Google OAuth2</span> for secure email capabilities. Integrated <span class='underline'>JQuery &amp; Bootstrap</span> for a polished user interface &amp; implemented <span class='underline'>lazy loading</span> for optimized performance. <span class='underline'>Router guards &amp; animations</span> were used for a seamless user experience. Also developed <span class='underline'>reactive forms</span>, handled <span class='underline'>PDF generation &amp; downloads</span>, &amp; leveraged <span class='underline'>dependency injection &amp; RxJS</span> for efficient asynchronous operations with <span class='underline'>Interceptors</span> for handling HTTP requests and responses. This project seamlessly integrated <span class='underline'>Angular</span> with <span class='underline'>Node.js</span> &amp; <span class='underline'>PostgreSQL</span>, managing the jobseeker dashboard developement,find work for filtering jobs, applied jobs, login with OTP/Email and user-mgmt components for streamlined Job application procedure.",


  "imgs": [
      "assets/images/projects/cj main page.png",
      "assets/images/projects/sign in.png",
      "assets/images/projects/login opt.png",
      "assets/images/projects/dashboard cj.png",
      "assets/images/projects/dash2.png",
      "assets/images/projects/dash3.png",
      "assets/images/projects/dash4.png",
      "assets/images/projects/dash5.png",
      "assets/images/projects/dash6.png",
      "assets/images/projects/dash7.png",
      "assets/images/projects/search page cj.png",
      "assets/images/projects/apply job cj.png",
      // "assets/images/projects/applied job.png",
      "assets/images/projects/find_talent.png",
      "assets/images/projects/recruiter cj.png",
      "assets/images/projects/blogcj.png",
  ],
  "demoLink": "https://www.contract-jobs.com/",
  "Technologies": ["NodeJS", "Angular", "PostgreSQL", "Angular Material"]
},
{
  "Title": "Deep Fake",
  "Description":  "Deepfakes works to <span class='underline'> Artificial Lip-Sync on Videos with Eye </span> and <span class='underline'> Facial Expression.</span> It creates <span class='underline'> realistic-looking fake videos</span>, in which it seems that someone is doing and saying something even though they didn’t do Anything. With the Help of the <span class='underline'> First Order Model for Image Animation </span> <span class='underline'>, Autoencoders & GAN's </span> helped to train this model.",

  "imgs": [
      "assets/images/projects/deep1.png",
      "assets/images/projects/dep 2.png",
      "assets/images/projects/deep3.png"
  ],
  "ghLink": "https://github.com/rjrishabhjain09/deepfake",
  // "demoLink": "https://projects.andresjosehr.com/hands-game",
  "Technologies": ["Python","Deep Leaning", "GAN's", "Autoencoders","Hyper parameter turing"]
},
{
  "Title": "Google Data Analysis",
  "Description":  "In this project, I try to <span class='underline'> explore, visualize from Google Play Store Dataset </span>. I have applied some of the analysis techniques on datasets like- <span class='underline'> Python, Pandas, Matplotlib, Numpy, Seaborn & Statistical knowledge(Classification models, Neural Networks, Random forests, Ensembles etc.)</span>",
  // "The rock-paper-scissors game extended. A personal project developed in angular in which you play randomly against the machine. It has the use of services, interfaces, and components.",
  "imgs": ["assets/images/projects/data1.png",
  "assets/images/projects/d2.png",
  "assets/images/projects/d3.png",
  "assets/images/projects/d4.png",
  "assets/images/projects/d5.png", 
  "assets/images/projects/d6.png"],
  "ghLink": "https://github.com/rjrishabhjain09/googleapprating",
  // "ghLink":"https://github.com/rjrishabhjain09/ShapeAI_Python_ML",
  // "demoLink": "https://projects.andresjosehr.com/hands-game",
  "Technologies": ["Python","Pandas & Numpy","Exploratory Data Analysis", "Statstical Analysis", "Data Preparation and Cleaning"]
},
// {
//   "Title": "Countries viewer",
//   "Description": "An interface that consumes an API of countries with which you can view a list of countries, see details of each country, filter by name and region. It also has a dark mode to switch between dark and light themes.",
//   "imgs": ["assets/images/countries-viewer.png"],
//   "ghLink": "https://github.com/andresjosehr/countries-viewer",
//   "demoLink": "https://projects.andresjosehr.com/countries-viewer",
//   "Technologies": ["Angular", "RxJS", "SASS", "API"]
// }
]

  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
