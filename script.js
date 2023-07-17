const mobileMenu=()=>{
    let menu=document.querySelector(`.header ul`);
    let btn=document.querySelector(`.header button`)



    if(btn.innerText==='MENU'){
        menu.style.display='block';
        btn.innerText='CLOSE';

    }
    else {
        menu.style.display='none';
        btn.innerText='MENU';
    }

}
let imgNum=0;

let rightBtn=document.querySelector('#right-btn');
let leftBtn=document.querySelector('#left-btn');
let pictures=document.querySelectorAll('.slider-images img')
rightBtn.addEventListener('click',()=>{
    displayNone();
    imgNum++;
    if(imgNum===pictures.length){
        imgNum=0;
    }


pictures[imgNum].style.display='block';

    console.log(imgNum);


})
leftBtn.addEventListener('click',()=>{
    displayNone();
    imgNum--;
if(imgNum===-1){
    imgNum= pictures.length-1;
}

pictures[imgNum].style.display='block';



});
const displayNone=()=>{
    pictures.forEach((img)=>{
        img.style.display='none';
    })
}

const portfolioSort=(button)=>{
    let categorty=button.getAttribute('data-category');
    displayNone2();
if(categorty==="sve"){
   displayBlock();
}
item.forEach((e)=>{
if(e.getAttribute('data-category').includes(categorty)){
    e.style.display='block';
}

});

}
let item=document.querySelectorAll(".portfolio-single-item");

const displayNone2=()=>{
    item.forEach((img)=>{
        img.style.display='none';
    })
}
const displayBlock=()=>{
    item.forEach((img)=>{
        img.style.display='block';
    })
}
const openModal=()=>{
    let btn=document.querySelectorAll(`.popup-modal #closeModal`);
    let pupup=document.querySelector(`.popup-modal`);
    let overlay=document.querySelector(`.overlay`);
    let close=document.querySelector(`#closeModal`);
    close.addEventListener('click',(even)=>{

            overlay.style.display='none';
            pupup.style.display='none';

    })
document.addEventListener('keydown',(event)=>{
    if(event.key==='Escape'){
        overlay.style.display='none';
        pupup.style.display='none';
    }

})
    overlay.style.display='block';
    pupup.style.display='block';

}