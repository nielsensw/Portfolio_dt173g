// Kod av Sally Nielsen

'use strict';

// Variables
const projectOutput = document.getElementById('project-grid');
const outputCV = document.getElementById('know-text');
const education = document.getElementById('education');
const experience = document.getElementById('experience');
const skills = document.getElementById('skills');
const eduOut = document.getElementById('eduOut');
const expOut = document.getElementById('expOut');
const skiOut = document.getElementById('skiOut');

// Eventhandlers
// Händelsehantering, när sidan laddas skrivs experience ut
window.addEventListener('load', () => {
    
    getPortfolio(projectOutput);
        getExperience(outputCV);
        highlightExp();
        smallScreen();
  

});

// Eventhanterare skriver ut erfarenhet vid klick på Erfarenhet
experience.addEventListener('click', () => {
    if (window.innerWidth > 800) {
        getExperience(outputCV);
        highlightExp();
      
    }
});
// Eventhanterare skriver ut utbildning vid klick på Utbildning
education.addEventListener('click', () => {
    if (window.innerWidth > 800) {
        getEducation(outputCV);
        highlightEdu();
       
    }
});
// Eventhanterare skriver ut språkkunskaper vid klick på kunskap
skills.addEventListener('click', () => {
    if (window.innerWidth > 800) {
        getSkills(outputCV);
        highlightSkills();
        
    }
});

// Functions
function getPortfolio(outputField){
    outputField.innerHTML = '';
fetch('https://www.nielsensw.se/dt173g/portfolio')
.then((response) => response.json())
.then((data) => {
    // Skriver ut till DOM
    data.forEach((element) => {
        outputField.innerHTML += `
        <div class="project-box">
        <div class="img-box">
            <img class="blacknwhite" alt="${element.title} image"
                src="./images/${element.image}">
        </div>
        <div class="text-foldout">
        <h5>${element.title}</h5>
        <p>${element.description}</p>
        <a target="_blank" href="${element.url}">Se projekt</a>
        </div>
    </div>`;
    });
});
}
// Fetch för utbildning
function getEducation(outputField) {
    outputField.innerHTML = '';
    fetch('https://www.nielsensw.se/dt173g/school')
        .then((response) => response.json())
        .then((data) => {
            // Skriver ut till DOM
            data.forEach((element) => {
                outputField.innerHTML += `
           <h5>${element.school} </h5>
           <p> <i>  ${element.name} - </i>
          ${element.years}</p>`;
            });
        });

}
//Fetch för erfarnehet
function getExperience(outputField) {

    outputField.innerHTML = '';
    fetch('https://www.nielsensw.se/dt173g/experience')
        .then(response => response.json())
        .then((data) => {
            // Skriver ut till DOM
            data.forEach((element) => {
                outputField.innerHTML += `
           <h5>${element.workplace} </h5>
             <p><i> ${element.title} </i> -
              ${element.years}</p>`;
            });
        });

}

// Fetch för kunskaper
function getSkills(outputField) {
    outputField.innerHTML = '';
    fetch('https://www.nielsensw.se/dt173g/skills')
        .then((response) => response.json())
        .then((data) => {
            // Skriver ut till DOM
            data.forEach((element) => {
                outputField.innerHTML += `
         <h5>${element.lang} </h5>
         <p>   ${element.description}</p>`;
            });
        });
}
// Ändra färg på rubriker beroende av vilken rubrik vars information skrivs ut
function highlightExp() {
    education.className = 'grey-h3';
    experience.className = 'green-h3';
    skills.className = 'grey-h3';
}
function highlightEdu() {

    education.className = 'green-h3';
    experience.className = 'grey-h3';
    skills.className = 'grey-h3';
}
function highlightSkills() {

    education.className = 'grey-h3';
    experience.className = 'grey-h3';
    skills.className = 'green-h3';
}
//Reload page funktion
function refresh() {
    return location.reload();
}
// Funktion för utskrift vid mindre skärmar
function smallScreen() {
    getExperience(expOut);
    getEducation(eduOut);
    getSkills(skiOut);
}
