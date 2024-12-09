const slideshowElements = document.querySelectorAll(".slideshow-element");

let count = 1 ;
setInterval(() => {
    count ++ ;
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");
    if(count > slideshowElements.length){
        slideshowElements[0].classList.add("current");
        count = 1;
    } else{

        currentElement.nextElementSibling.classList.add("current");
    }

    

}, 2000);