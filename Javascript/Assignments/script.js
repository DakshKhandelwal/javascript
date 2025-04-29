const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


// console.log(bands);
// console.log(bands.sort());

function ignoreChar(str) {
    return str.replace(/^(A |An |The)/i, "").trim();
}

bands.sort((a,b) => ignoreChar(a) > ignoreChar(b) ? 1 : -1)
console.log(bands);


const myList = document.querySelector('#band');
console.log(myList);

myList.innerHTML = bands.map(band => `<li> ${band}</li>`).join("");
// myList.style.listStyle ="inside square";

// console.log(myList);