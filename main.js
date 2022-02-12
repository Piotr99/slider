const infoSlides = [{
    img: "images/img1.jpg",
    text: "Pierwszy tekst"
},{
    img: "images/img2.jpg",
    text: "drugi tekst"
},{
    img: "images/img3.jpg",
    text: "trzeci tekst"
}];

let active = 0;
let time = 5000;
const image = document.querySelector("img")
const h1 = document.querySelector('h1');
const dots = [...document.querySelectorAll('.dots span')]

const changeSlide = () =>{
    active++
    if(infoSlides.length===active){
        active = 0;
    }
    image.src = infoSlides[active].img;
    h1.textContent = infoSlides[active].text;

  addDots();
}

const addDots = () =>{
    const activeIndex = dots.findIndex(dot=>dot.classList.contains('active'));
    dots[activeIndex].classList.remove('active');
    dots[active].classList.add('active');
    }


let czas = setInterval(changeSlide, time);

const keySlide = (e)=>{
    if(e.keyCode ==37 || e.keyCode ==39){
        
        clearInterval(czas);
        e.keyCode ==37 ? active-- :active++;
        if(active ===infoSlides.length){
            active = 0;
        }else if(active<0){
            active = infoSlides.length - 1;
        }
        image.src = infoSlides[active].img;
        h1.textContent = infoSlides[active].text;
        addDots();
        
        

    czas = setInterval(changeSlide, time)
}

}
window.addEventListener('keydown', keySlide);
