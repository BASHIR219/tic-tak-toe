// funtion to change turn
let turn = "X"
const changeTurn = () => {
    return turn==="X"?"0": "X"
} 
let isgameover=false;

//cheking winner condition
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2,0,2,0],
        [3,4,5,0,7,0],
        [6,7,8,0,12,0],
        [0,3,6,-5,7,90],
        [1,4,7,0.1,7,90],
        [2,5,8,5,7,90],
        [0,4,8,1,8,45],
        [2,4,6,0.1,7,-45],
        ]
        win.forEach(e=>{
            if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=='')){
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + "   won the match";
               
                isgameover=true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='200px'
                
                document.querySelector('.info').style.color='blue'; 
                document.querySelector('.line').style.width ='14vw';
                document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            }
        })
    }

//logic of game

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn;
            turn=changeTurn();
            checkWin();
            if(!isgameover)
            document.getElementsByClassName('info')[0].innerText= 'Turn for '+ turn; 
        }
    })
})

//add event listner
reset.addEventListener('click', ()=>{
    let boxtext=document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=' ';
    });
    turn = 'X';
    isgameover=false;
    document.getElementsByClassName('info')[0].innerText= 'Turn for '+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width='00px'
    document.querySelector('.info').style.color='black';
    document.querySelector('.line').style.width ='0';

})