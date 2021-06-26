function toggleClass(){
    var element = document.getElementById('rating_wrap');
    element.classList.toggle("active")
};



const star1 = document.querySelector(".star1");
const star2 = document.querySelector(".star2");
const star3 = document.querySelector(".star3");
const star4 = document.querySelector(".star4");
const star5 = document.querySelector(".star5");
const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")
const p4 = document.querySelector(".p4")
const p5 = document.querySelector(".p5")

function stars1(){
    star1.style.color ="#ffe400";
    star2.style.color ="#A9A9A9";
    star3.style.color ="#A9A9A9";
    star4.style.color ="#A9A9A9";
    star5.style.color ="#A9A9A9";
    p1.style.display ="block";
    p1.style.color ="#212121";
    p2.style.display ="none";
    p3.style.display ="none";
    p4.style.display ="none";
    p5.style.display ="none";
    
}

function stars2(){
    star1.style.color ="#ffe400";
    star2.style.color ="#ffe400";
    star3.style.color ="#A9A9A9";
    star4.style.color ="#A9A9A9";
    star5.style.color ="#A9A9A9";
    p2.style.display ="block";
    p2.style.color ="#212121";
    p1.style.display ="none";
    p3.style.display ="none";
    p4.style.display ="none";
    p5.style.display ="none";

}

function stars3(){
    star1.style.color ="#ffe400";
    star2.style.color ="#ffe400";
    star3.style.color ="#ffe400";
    star4.style.color ="#A9A9A9";
    star5.style.color ="#A9A9A9";
    p3.style.display ="block";
    p3.style.color ="#212121";
    p1.style.display ="none";
    p2.style.display ="none";
    p4.style.display ="none";
    p5.style.display ="none";

}

function stars4(){
    star1.style.color ="#ffe400";
    star2.style.color ="#ffe400";
    star3.style.color ="#ffe400";
    star4.style.color ="#ffe400";
    star5.style.color ="#A9A9A9";
    p4.style.display ="block";
    p4.style.color ="#212121";
    p1.style.display ="none";
    p3.style.display ="none";
    p2.style.display ="none";
    p5.style.display ="none";


}

function stars5(){
    star1.style.color ="#ffe400";
    star2.style.color ="#ffe400";
    star3.style.color ="#ffe400";
    star4.style.color ="#ffe400";
    star5.style.color ="#ffe400";
    p5.style.display ="block";
    p5.style.color ="#212121";
    p1.style.display ="none";
    p3.style.display ="none";
    p4.style.display ="none";
    p2.style.display ="none";

}
