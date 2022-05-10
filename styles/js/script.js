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

//COMMENTS(*%&#@!)
const path_photo = "styles/images/Pavel/"
let startingComments = [
    { name : "Smuckersreg Toppings", body : "Hello", time : "12/10/2020", res: "Photo15_1.png", height: 120},
    { name : "Artyom", body : "Lorem Ipsum", time : "10/11/2020", res: "Photo15_1.png", height: 120},
    { name : "Ivan Cook", body : "Nice recipe", time : "2/12/2020", res: "Photo15_1.png", height: 120},
    { name : "Kitty", body : "bla-bla-bla", time : "2/12/2020", res: "Photo15_1.png", height: 120},
    { name : "Dima", body: "JavaScript((", time: "22/12/2020", res: "Photo15_1.png", height: 120},
    { name : "Vanya", body: "Agree((", time : "23/12/2020", res: "Photo15_1.png", height: 120},
    { name : "Terminator", body: "Hello, World!", time: "10/4/2022", res: "Photo15_1.png", height: 120}
]
let isPushed15 = false;
if (localStorage.getItem('isPushed15')){
    isPushed15 = localStorage.getItem('isPushed15')
}
let comments = []
if (!isPushed15){
    startingComments.forEach((item) => (comments.push(item)))
    isPushed15 = true;
    saveComments()
    localStorage.setItem('isPushed15', true)
}
loadComments()
deleteComments()
let currentPageP = 1
if (localStorage.getItem("currentPageP")){
    currentPageP = localStorage.getItem("currentPageP")
} else localStorage.setItem("currentPageP", currentPageP)
makePages()
showPage(currentPageP)

let btnPostCom15 = document.getElementById("btn_15_4")
let txtPostcom15 = document.getElementById("input15_1")
txtPostcom15.oninput = () => {
    currComm = txtPostcom15.value
    if (currComm.length > 200) {
        currComm = currComm.slice(0, 200)
        txtPostcom15.value = currComm
        alert("Длина слишком большая(больше 200 символов)")
    } else localStorage.setItem('currComm', currComm)
}
if (localStorage.getItem('currComm')){
    txtPostcom15.value = localStorage.getItem('currComm')
}
btnPostCom15.onclick = () => {
    if (txtPostcom15.value.replace(/ /g,'') !== ""){
        let comment = {
            name : "Anonymous",
            body : txtPostcom15.value,
            time : timeConvert(Date.now()),
            res: "Anonymous.png"
        }
        comments.push(comment)
        saveComments()
        deleteComments()
        makePages()
        makeLiClick()
        currentPageP = 1
        showPage(1)
    } else alert('Не введён комментарий')
    localStorage.removeItem('currComm')
    txtPostcom15.value = ''
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments))
}

function deleteComments(){
    let mother = document.getElementById("block16")
    let children1 = document.querySelectorAll(".bottom-content16")
    let children2 = document.querySelectorAll(".block16-4")
    for (let child of children2) mother.removeChild(child)
    for (let child of children1) mother.removeChild(child)
    for (let i = comments.length - 1; i >= 0; i--){
        comments[i]["height"] = +computeHeight(comments[i]["body"])
    }
}

function loadComments(){
    if (localStorage.getItem('comments')){
        comments = JSON.parse(localStorage.getItem('comments'))
    }
}

function timeConvert(timestamp){
    let a = new Date(timestamp)
    let day = a.getDate()
    let year = a.getFullYear()
    let month = a.getMonth() + 1
    return day + '/' + month + '/' + year
}

function createComment(name, body, date, src){
    let mother = document.getElementById("block16")

    let bot_content = document.createElement("div")
    bot_content.className = "bottom-content16"
    mother.appendChild(bot_content)

    let img = document.createElement("img")
    img.src = path_photo + src
    img.className = "Photo16-2"
    bot_content.appendChild(img)

    let sub_content = document.createElement("div")
    sub_content.className = "sub-content2"
    bot_content.appendChild(sub_content)

    let center_row = document.createElement("div")
    center_row.className = "center-row16"
    sub_content.appendChild(center_row)

    let center_comment = document.createElement("div")
    center_comment.className = "center-comment16"
    center_row.appendChild(center_comment)

    let span1 = document.createElement("span")
    span1.className = "text16-9"
    span1.textContent = "post by"
    center_comment.appendChild(span1)

    let reply = document.createElement("div")
    reply.className = "smuck-reply2"
    center_comment.appendChild(reply)

    let span2 = document.createElement("span")
    span2.className = "text16-8"
    span2.textContent = name
    reply.appendChild(span2)

    let aReply = document.createElement("a")
    aReply.className = "reply16-2"
    aReply.href = "#null"
    aReply.textContent = "reply"
    reply.appendChild(aReply)

    let bottom = document.createElement("div")
    bottom.className = "bottom-likes16"
    reply.appendChild(bottom)

    let span3 = document.createElement("span")
    span3.textContent = "456"
    span3.className = "t456-2"
    bottom.appendChild(span3)

    let span4 = document.createElement("span")
    span4.className = "share16-2"
    bottom.appendChild(span4)

    let i1 = document.createElement("i")
    i1.className = "fa fa-share-alt"
    span4.appendChild(i1)


    let span5 = document.createElement("span")
    span5.className = "t15-2"
    span5.textContent = "15"
    bottom.appendChild(span5)

    let span6 = document.createElement("span")
    span6.className = "like16-2"
    bottom.appendChild(span6)

    let i2 = document.createElement("i")
    i2.className = "fa-solid fa-thumbs-up"
    span6.appendChild(i2)

    let _date = document.createElement("span")
    _date.className = "date16-3"
    _date.textContent = date
    center_comment.appendChild(_date)

    let _body = document.createElement("span")
    _body.className = "text16-11"
    _body.textContent = body
    let count_strs = Math.ceil(body.length / 100)
    _body.style.height = count_strs * 24 + "px";
    center_comment.appendChild(_body)

    let block = document.createElement("div")
    block.className = "block16-4"
    mother.appendChild(block)
}

function computeHeight(body){
    let count_strs = Math.ceil(body.length / 100)
    height = 96 + count_strs * 24
    return height
}


function makePages(){
    let length = 0
    let Pages
    for (let comment of comments) {
        length += +comment["height"]
    }
    Pages = Math.ceil(length / 725)
    let ul = document.getElementById("navigation_bar")
    let children1 = document.querySelectorAll(".text17-1")
    let children2 = document.querySelectorAll(".text17-arrowleft")
    let children3 = document.querySelectorAll(".text17-arrowright")
    for (let child of children2) ul.removeChild(child)
    for (let child of children3) ul.removeChild(child)
    for (let child of children1) ul.removeChild(child)
    let lil = document.createElement("li")
    lil.className = "text17-arrowleft"
    lil.id = "text17_arrowleft"
    lil.textContent = "<"
    lil.addEventListener("click", () => {
        currentPageP = localStorage.getItem("currentPageP")
        if (currentPageP > 1){
            localStorage.setItem("currentPageP", --currentPageP)
            showPage(currentPageP)
        }
    })
    ul.appendChild(lil)
    for (let i = 1; i <= Pages; i++){
        let li = document.createElement("li")
        li.textContent = i
        li.className = "text17-1"
        if (i === currentPageP) li.classList.add("active")
        ul.appendChild(li)
    }
    lil = document.createElement("li")
    lil.id = "text17_arrowright"
    lil.className = "text17-arrowright"
    lil.addEventListener("click", () => {
        currentPageP = localStorage.getItem("currentPageP")
        if (currentPageP < Pages){
            localStorage.setItem("currentPageP", ++currentPageP)
            showPage(currentPageP)
        }
    })
    lil.textContent = ">"
    ul.appendChild(lil)
}

function showPage(id){
    let curr_id = 1
    let curr_height
    let start = comments.length - 1
    let finish = 0
    deleteComments()
    let j = start
    let i = start
    let flag = false
    while (curr_id++ != id){
        curr_height = 0
        while (curr_height <= 670 && i >= 0){
            curr_height += +comments[i]["height"]
            i--;
        }
        if (i === -1) flag = true
        if (!flag) j = i + 1
    }
    start = j
    finish = start
    curr_height = 0
    while (curr_height <= 520 && finish >= 0){
        curr_height += +comments[finish--]["height"]
    }
    if (finish === -1) finish++
    for (let i = start; i >= finish; i--){
        createComment(comments[i]["name"], comments[i]["body"], comments[i]["date"], comments[i]["res"])
    }
    let actives = document.querySelectorAll(".active")
    for (let active of actives){
        active.classList.remove("active")
    }
    let activePageP
    let items = document.querySelectorAll(".text17-1")
    for (let item of items){
        if (item.textContent == id) {
            activePageP = item
            activePageP.classList.add('active')
            break
        }
    }
}
makeLiClick()
function makeLiClick() {
    let activePageP
    let items = document.querySelectorAll(".text17-1")
    for (let item of items){
        if (item.textContent == currentPageP) activePageP = item
    }
    for (let item of items){
        item.addEventListener('click', function() {
            if (activePageP){
                activePageP.classList.remove('active')
            }
            activePageP = this
            this.classList.add('active')
            let pageNum = +item.textContent
            localStorage.setItem("currentPageP", +item.textContent)
            showPage(pageNum)
        })
    }
}


