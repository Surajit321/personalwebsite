import { loadSkills } from "./skills.js";
import { loadPortfolio } from "./portfolio.js";
import { loadExperience } from "./experience.js"
import { loadEducation } from "./education.js"




window.addEventListener('load', function () {
  getData().then((res) => {

       populateWebsiteContent(res);

    }).catch((err) => {

        console.log(err)

    });


})


// Loading data from the json file.
 async function getData(){
   const response = await fetch('./data.json');
   let data = await response.json();
   return data
}



let skills = [];
let portfolios = [];
let companies = [];
let institutes = [];

// populating website content
function populateWebsiteContent(data){
     document.querySelector('title').innerText = data.title;
     document.querySelector('.abouttext h2').innerText = data.aboutme;
     document.querySelector('.abouttext p').innerText = data.mypitch;
     document.querySelector('#age').innerText = data.myage;
     document.querySelector('#email').innerText = data.myemail;
     document.querySelector('#phone').innerText = data.myphone;
     document.querySelector('#address').innerText = data.myaddress;
     document.querySelector('.aboutcontent .name').innerText = data.myname;
     document.querySelector('.aboutcontent .role').innerText = data.myrole;
     document.querySelector('.skills h2').innerText = data.skillsheader;
     skills = data.myskills;
     portfolios = data.myportfolio;
     companies = data.companies;
     institutes = data.institutes;

     loadSkills(skills)
     loadPortfolio(portfolios)
     loadExperience(companies)
     loadEducation(institutes)
}
