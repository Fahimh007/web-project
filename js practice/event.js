// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent = "fahim hasan";
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);

//remove Event listener
// fpara.removeEventListener('click', changeText); 

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = 'cleck done';
// });

// let paras = document.querySelectorAll('p');
function alertPara(event){
    if(event.target.nodeName === 'SPAN'){
        alert("your have click on "+ event.target.textContent);
    }
}

// for(let i=0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }

let mydiv = document.getElementById('wrapper');
mydiv.addEventListener('click',alertPara);

