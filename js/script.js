
/******** link menu ********/
const links = document.querySelectorAll(".header-bg__menu a")

function activeLink(link) {
    const url = location.href
    const href = link.href

    if (url.includes(href)) {
        link.classList.add("active")
    }

}

links.forEach(activeLink)

/******** end link menu ********/

/******** active product ********/
const parametros = new URLSearchParams(location.search);

function activeProduct(parametro) {
    const element = document.getElementById(parametro);

    console.log(element);
    if (element) {
        element.checked = true;
    }
}

parametros.forEach(activeProduct);
/******** end active product ********/

/******** questions ********/

const questions = document.querySelectorAll(".questions button")

function activeQuestion(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute("aria-controls")
    const answer = document.getElementById(controls)

    answer.classList.toggle("active-question")
    const isActive = answer.classList.contains("active-question");
    question.setAttribute("aria-expanded", isActive ? "true" : "false");
}

function eventQuestions(question) {
    question.addEventListener('click', activeQuestion)
}

questions.forEach(eventQuestions);
/******** end questions ********/

/******** gallery ********/

const gallery = document.querySelectorAll(".bicycle-image img");
const galleryContainer = document.querySelector(".bicycle-image");

function changeImage(event) {
    const img = event.currentTarget;
    const media = matchMedia("(min-width:100px)").matches
    if (media) {
        galleryContainer.prepend(img);
    }
}

function eventsGallery(img) {
    img.addEventListener('click', changeImage);
}

gallery.forEach(eventsGallery);

/******** end gallery ********/

/******** animation ********/
if (window.SimpleAnime) {
    new SimpleAnime();
}
/******** end animation ********/