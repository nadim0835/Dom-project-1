let win = document.querySelector('.win');
let become = document.querySelector('.chance');
let span =document.querySelector('.span')


let inputone = document.querySelector('.inputone'); 
let inputtow = document.querySelector('.inputtow'); 

let btnone = document.querySelector('.btnone'); 
let btntow = document.querySelector('.btntow'); 

let Playerone = document.querySelector('.plyerone');
let Playertow = document.querySelector('.plyertow');
let clik =0;
let chance=5;



btnone.addEventListener('click',function(){
    if(inputone.value==''){
        alert(' Sorry!' +' ' + ' Picup any number ')
    }
    else if(inputone.value>=10){
        alert('Plase inter a value less then 10')//true hole ata print hobe
    }else{
        // h1.innerHTML='player tow'
        Playerone.style.display = 'none'
        Playertow.style.display = 'block'
    };
});
btntow.addEventListener('click',function(){
    clik++
    chance--
    
    console.log(clik);
    let x = inputone.value ;
    let y =inputtow.value;
    if(y==''){
        alert(' Sorry!' +' ' + ' Picup any number ')
    } else if(y>=10){
        alert('Plase inter a value less then 10')//true hole ata print hobe
    }else if(x==y){
        win.innerHTML="Player Two Win!"
        Playertow.style.display = 'none'
        
    } else if(clik==5 && x!=y){
        
        win.innerHTML="Player One Win!"
        become.style.display='none'
        Playertow.style.display = 'none'

    } else {
        span.innerHTML=chance
        become.style.display='block'
    }
    
});

