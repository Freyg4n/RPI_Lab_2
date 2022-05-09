/*===========Block1_Slider(Dima)=============*/
let links = document.querySelectorAll(".itemLinks");
let wrapper = document.querySelector("#wrapper");
let activeLinkD = 0;

if (localStorage.getItem('navLink')) {
    activeLinkD = localStorage.getItem('navLink');
}

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', setClickedItem, false);
    link.itemID = i;
}

links[activeLinkD].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();
    let clickedLink = e.target;
    activeLinkD = clickedLink.itemID;
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
    localStorage.setItem('navLink', activeLinkD);
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
    if (activeLinkD < links.length - 1) {
        activeLinkD++;
    } else {
        activeLinkD = 0;
    }
    let newLink = links[activeLinkD];
    changePosition(newLink);
}
/*===========================================*/