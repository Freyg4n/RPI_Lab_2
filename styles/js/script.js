/*===========Block1 Slider(Dima)=============*/
let links = document.querySelectorAll(".itemLinks");
let wrapper = document.querySelector("#wrapper");
let activeLink = 0;

if (localStorage.getItem('navLink')) {
    activeLink = localStorage.getItem('navLink');
}

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', setClickedItem, false);
    link.itemID = i;
}

links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();
    let clickedLink = e.target;
    activeLink = clickedLink.itemID;
    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

function changePosition(link) {
    link.classList.add("active");

    let position = link.getAttribute("data-pos");
    wrapper.style.left = position;
    localStorage.setItem('navLink', activeLink);
}

let timeoutID;

function startTimer() {
    timeoutID = window.setInterval(goToNextItem, 7000);
}
startTimer();

function resetTimer() {
    window.clearInterval(timeoutID);
    startTimer();
}

function goToNextItem() {
    removeActiveLinks();
    if (activeLink < links.length - 1) {
        activeLink++;
    } else {
        activeLink = 0;
    }
    let newLink = links[activeLink];
    changePosition(newLink);
}
/*===========================================*/