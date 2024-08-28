let button=document.querySelector('.button');
let clearBtn=document.querySelector('.clear');
let container=document.querySelector('.container');

let input=document.querySelector('input');

function makeGrid(){
    let size=input.value;
    container.textContent='';
    let cellSize=Math.floor((container.clientWidth)/size);
    for(let i=1;i<=size;i++){
        let div1=document.createElement('div');
        div1.classList.add('one');
        for(let j=1;j<=size;j++){
            let div2=document.createElement('div');
            div2.classList.add('two');
            div2.style.width=`${cellSize}px`;
            div2.style.height=`${cellSize}px`;
            div2.addEventListener('mouseover', function(){
                div2.style.backgroundColor='black';
            });
            div1.appendChild(div2);
        }
        container.appendChild(div1);
    }
    input.textContent='';
}
function clearGrid(){
    for(let i=0;i<container.children.length;i++){
        let row=container.childNodes[i];
        for(let j=0;j<row.children.length;j++){
        let cell=row.childNodes[j];
        cell.style.backgroundColor='';
    }
    }
}
clearBtn.addEventListener('click', clearGrid);
button.addEventListener('click', makeGrid);