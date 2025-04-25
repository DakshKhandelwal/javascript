const targetElement = document.querySelector("#level");

console.dir(targetElement);

function getLevel (element) {
    let level = 0;
    while(element) {
        element = element.parentElement;
        level++;
    }
    return level;
}

const getDomLevel = getLevel(targetElement);
console.log(getDomLevel);

