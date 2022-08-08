const welcome = document.getElementById('welcome');
const projects = document.getElementById('projects');
const experience = document.getElementById('experience');
const contact = document.getElementById('contact');
welcome.onmouseover = function () {
    welcome.style.color = '#FFFFFF';
}
welcome.onmouseout = function() {
    welcome.style.color = 'palevioletred';
}
projects.onmouseover = function () {
    projects.style.color = '#FFFFFF';
}
projects.onmouseout = function() {
    projects.style.color = 'palevioletred';
}
experience.onmouseover = function () {
    experience.style.color = '#FFFFFF';
}
experience.onmouseout = function() {
    experience.style.color = 'palevioletred';
}
contact.onmouseover = function () {
    contact.style.color = '#FFFFFF';
}
contact.onmouseout = function() {
    contact.style.color = 'palevioletred';
}



//contact
const contactInfo = {
    Github: {
        name:"Github",
        link:'https://github.com/OwasimulS',
        img:'Pictures/github.png'
    }, LinkedIn:{
        name:'LinkedIn',
        link:'https://www.linkedin.com/in/owasimul-sidick-146373239/',
        img:'Pictures/linkedIn.png'
    }, Gmail:{
        name:'Gmail',
        email:'owasimuls@gmail.com',
        img:'Pictures/gmail.png'
    }, Phone:{
        name:'Phone Number',
        num:'3472578954',
    }
}
const showBtn = document.getElementById('showBtn');
const showMoreInfo = document.getElementById('showMoreInfo');
showMoreInfo.style.display = 'none';
showBtn.onclick = function() {
    showMoreInfo.style.display = 'block';
}
console.log(contactInfo.Github.name);
const github = document.getElementById('GithubHeader');
github.innerHTML =contactInfo.Github.name;
const linkedin = document.getElementById('LinkedIn');
linkedin.innerHTML = contactInfo.LinkedIn.name;
const bottom = document.getElementById('bottom');