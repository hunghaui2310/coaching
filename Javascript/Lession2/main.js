import logger from "./logger.js";


// innerText và textContent
var headingElement = document.querySelector('.heading');
console.log(headingElement.textContent);

// innerHTML và outerHTML
var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h2>This is box</h2>';

var box2Element = document.querySelector('.box2');
console.log(boxElement.outerHTML)


var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var ulElement = document.getElementsByTagName('ul')[0];
    var results;
    for (const course of courses) {
        results += `<li>${course}</li>`;
    }
    return ulElement.innerHTML = results;
}

render(courses);


// DOM CSS Lession
var box3Element = document.querySelector('.box3');
// box3Element.style.width = '100px';
// box3Element.style.height = '100px';
// box3Element.style.backgroundColor = 'red';

Object.assign(box3Element.style, {
    width: '100px',
    height: '100px',
    backgroundColor: 'red'
})

console.log(box3Element.style);

// ClassList property Lession
var wallElement = document.querySelector('.wall');
wallElement.classList.add('red');
// Ngoài ra còn có các phương thức hay dùng: contains, remove, toggle
// console.log(wallElement.classList);

// DOM events
var h2Ele = document.getElementById('dom-event');
h2Ele.onclick = function(e) {
    console.log(e);
}
console.log(h2Ele);

// stopPropagation
var btnEle = document.getElementById('stopParagationLession');
btnEle.onclick = function btnFunction(e) {
    e.stopPropagation();
    console.log('Clicked to button');
}

// Event listener
var btnEventListener = document.getElementById('event-listener');
btnEventListener.addEventListener('click', function() {
    console.log('Lession Event Listener');
})


// Tagged template literals
function highlight([first, ...string], ...values) {
    return values.reduce(
        (acc, curr) => [...acc, `<span>${curr}</span>`, string.shift()], [first]
    ).join('');
}

const name = 'Hung Nguyen';
const age = 25;
const htmlHighlight = highlight`Sử dụng tagged template literals. Name: ${name}, age: ${age}`;
console.log(htmlHighlight);


logger('OI doi oi');