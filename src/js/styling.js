// Kod av Sally Nielsen
// Variabler
var projBox = document.getElementsByClassName('project-box');
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
  // Ändrar höjd på projekt-box
  for (var i = 0; i < projBox.length; i++) {
    projBox[i].style.height = '300px';
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
    // Ändrar höjd på project-box
    var dropOutBox = e.target.parentNode.parentNode;
    dropOutBox.style.height = 'auto';
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
