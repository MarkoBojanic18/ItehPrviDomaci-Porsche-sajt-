const img = document.querySelector("#product-img");
const text = document.querySelector("#text");
let btn1 = document.querySelector('#dugme2');
let div1 = document.querySelector('.product');
let arrow = document.querySelector('#arrow');

btn1.addEventListener('click',()=>{
    if(div1.style.display === 'none'){
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
        arrow.style.display='block';
    }else{
        div1.style.display = 'none';
    }
})

var images = [{
    src: "redCarrera.png",
    color:"#9d1c1f",
    x:  "CENA: 130.000€"
    
},

{
    src: "blackCarrera.png",
    color:"#000000",
    x:  "CENA: 135.000€"
},

{
    src: "yellowCarrera.png",
    color:"#FFFF00",
    x:  "CENA: 140.000€"
},

{
    src: "whiteCarrera.png",
    color:"#FFFFFF",
    x:  "CENA: 145.000€"
}]




const index = 0;

function pagination(){
    for(let i = 0; i<images.length;i++){
        const button = document.createElement("button");
        button.id = i;
        button.setAttribute("onclick","changeImage(this)")
        button.style.backgroundColor = images[i].color;
        document.querySelector(".pagination").appendChild(button);
        if(i==index){
            button.classList.add("active");
        }

    }
}

function changeImage(element){
   img.src = images[element.id].src;
   text.innerHTML = images[element.id].x;
   const buttons= document.querySelector(".pagination").children;
   for(let i = 0;i<buttons.length;i++){
       if(buttons[i].id==element.id){
           buttons[i].classList.add("active");
       }else{
           buttons[i].classList.remove("active");
       }
   }
}

img.src = images[index].src;

window.onload = pagination();



// DRUGA


const img1 = document.querySelector("#product-img1");
const text1 = document.querySelector("#text1");
let btn2 = document.querySelector('#dugme3');
let div2 = document.querySelector('.product1');

btn2.addEventListener('click',()=>{
    if(div2.style.display === 'none'){
        div2.style.display = 'block';
        div1.style.display = 'none';
        div3.style.display = 'none';
        arrow.style.display='block';
    }else{
        div2.style.display = 'none';
    }
})

var images1 = [{
    src: "redCayman.png",
    color:"#9d1c1f",
    x:  "CENA: 140.000€"
    
},

{
    src: "blackCayman.png",
    color:"#000000",
    x:  "CENA: 145.000€"
},

{
    src: "yellowCayman.png",
    color:"#FFFF00",
    x:  "CENA: 150.000€"
},

{
    src: "whiteCayman.png",
    color:"#FFFFFF",
    x:  "CENA: 155.000€"
}]




const index1 = 0;

function pagination1(){
    for(let i = 0; i<images1.length;i++){
        const button = document.createElement("button");
        button.id = i;
        button.setAttribute("onclick","changeImage1(this)")
        button.style.backgroundColor = images1[i].color;
        document.querySelector(".pagination1").appendChild(button);
        if(i==index1){
            button.classList.add("active");
        }

    }
}

function changeImage1(element){
   img1.src = images1[element.id].src;
   text1.innerHTML = images1[element.id].x;
   const buttons= document.querySelector(".pagination1").children;
   for(let i = 0;i<buttons.length;i++){
       if(buttons[i].id==element.id){
           buttons[i].classList.add("active");
       }else{
           buttons[i].classList.remove("active");
       }
   }
}

img1.src = images1[index1].src;

window.onload = pagination1();



// TRECA







const img2 = document.querySelector("#product-img2");
const text2 = document.querySelector("#text2");
let btn3 = document.querySelector('#dugme1');
let div3 = document.querySelector('.product2');

btn3.addEventListener('click',()=>{
    if(div3.style.display === 'none'){
        div3.style.display = 'block';
        div1.style.display = 'none';
        div2.style.display = 'none';
        arrow.style.display='block';
    }else{
        div3.style.display = 'none';
    }
})

var images2 = [{
    src: "redMacan.png",
    color:"#9d1c1f",
    x:  "CENA: 100.000€"
    
},

{
    src: "blackMacan.png",
    color:"#000000",
    x:  "CENA: 105.000€"
},

{
    src: "greenMacan.png",
    color:"#296e01",
    x:  "CENA: 110.000€"
},

{
    src: "whiteMacan.png",
    color:"#FFFFFF",
    x:  "CENA: 115.000€"
}]




const index2 = 0;

function pagination2(){
    for(let i = 0; i<images2.length;i++){
        const button = document.createElement("button");
        button.id = i;
        button.setAttribute("onclick","changeImage2(this)")
        button.style.backgroundColor = images2[i].color;
        document.querySelector(".pagination2").appendChild(button);
        if(i==index2){
            button.classList.add("active");
        }

    }
}

function changeImage2(element){
   img2.src = images2[element.id].src;
   text2.innerHTML = images2[element.id].x;
   const buttons= document.querySelector(".pagination2").children;
   for(let i = 0;i<buttons.length;i++){
       if(buttons[i].id==element.id){
           buttons[i].classList.add("active");
       }else{
           buttons[i].classList.remove("active");
       }
   }
}

img2.src = images2[index2].src;

window.onload = pagination2();

