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

// Kod av Sally Nielsen
// Variabler
var content = document.getElementsByClassName('text-foldout');
var projgrid = document.getElementById('project-grid');
var projImgBox = document.getElementsByClassName('blacknwhite');
var projHead = document.getElementById('project-head');
var projImgBoxColor = document.getElementsByClassName('color');
var header = document.getElementById('header');
var logo = document.getElementById('logoBox');

const homeSection = document.querySelector('#presentation');
const infoSection = document.querySelector('#info-section');
const infoHead = document.querySelector('#info-head');
const knowHead = document.querySelector('#headings-know');
const menubtn = document.getElementById('menubtn');
const smallNavHome = document.getElementById('small-nav-home');
const smallNavInfo = document.getElementById('small-nav-info');
const smallNavProject = document.getElementById('small-nav-project');
const smallNavCv = document.getElementById('small-nav-cv');
const navHome = document.getElementById('nav-home');
const navInfo = document.getElementById('nav-info');
const navProject = document.getElementById('nav-project');
const navCv = document.getElementById('nav-cv');
const infoPos = infoHead.offsetTop;
const projPos = projHead.offsetTop;
const cvPos = document.body.scrollHeight;
const cvPosSmall = document.body.scrollHeight;



// Eventhandlers

projgrid.addEventListener('click', (e) => {
  // ändrar opacitet och höjd vid klick av projekt-grid
  for (var i = 0; i < projImgBoxColor.length; i++) {
    projImgBoxColor[i].className = 'blacknwhite';
  }
  for (var i = 0; i < content.length; i++) {
    content[i].style.maxHeight = '0';
    content[i].style.opacity = '0';
  }

  // Kollar om det som klickas tillhör projectimg-klassen, ändrar isf den klickade
  // komponentens stil (opacitet och höjd)
  if (e.target.matches('.blacknwhite')) {
    e.target.className = 'color';
    var dropOut = e.target.parentNode.nextElementSibling;
    dropOut.style.maxHeight = '500px';
    dropOut.style.opacity = '1';
  }
});
// Ändring position vid klickande
// Hem position
navHome.addEventListener('click', () => {
  window.scroll(0, 0);

});
smallNavHome.addEventListener('click', () => {
  window.scroll(0, 0);
  menubtn.checked = false;

});
// Info position
navInfo.addEventListener('click', () => {
  changePosition(infoPos);

});
smallNavInfo.addEventListener('click', () => {
  changePosition(infoPos);
  menubtn.checked = false;
});
//  Projekt position
navProject.addEventListener('click', () => {
  changePosition(projPos);
});
smallNavProject.addEventListener('click', () => {
  changePosition(projPos);
  menubtn.checked = false;
});
// cv position
navCv.addEventListener('click', () => {
  changePosition(cvPos);

});
smallNavCv.addEventListener('click', () => {
  changePosition(cvPosSmall);
  menubtn.checked = false;

});

// Kollar om elementet är synligt eller ej vid scroll och ändrar då klass (för färgädnring)
document.addEventListener('scroll', () => {
  if (window.innerWidth > 800) {
    const proj = projHead;
    const cv = knowHead;
    const info = infoHead;

    if (offset(homeSection)) {
      changeNavColor(navHome);
      changeNavColor2(navProject);
      changeNavColor2(navCv);
      changeNavColor2(navInfo);
    }
    else if (offset(info)) {
      changeNavColor(navInfo);
      changeNavColor2(navProject);
      changeNavColor2(navCv);
      changeNavColor2(navHome);
    }
    else if (offset(proj)) {
      changeNavColor(navProject);
      changeNavColor2(navCv);
      changeNavColor2(navInfo);
      changeNavColor2(navHome);

    } else if (offset(cv)) {

      changeNavColor(navCv);
      changeNavColor2(navProject);
      changeNavColor2(navInfo);
      changeNavColor2(navHome);
    }
  }
});

// Functions for css
// Funktion för att ändra position
function changePosition(element) {
  window.scrollTo(0, element);
}
// Flyttar logo-delen upp vid hovrande över greenblock
function moveContentUp() {
  logo.style.marginTop = '-200px';
  header.style.height = '240px';
  homeSection.style.top = '100px';
}
// Flyttar ner logo-delen vid hovrande av den
function moveContentDown() {
  logo.style.marginTop = '0';
  header.style.height = '80vh';
}


// Funktion för att kolla position av element
function offset(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}
// Funktioner för att ändra klass för element
function changeNavColor(element) {
  element.className = 'link-hover-2';
}
function changeNavColor2(element) {
  element.className = 'link-hover-1';
}
