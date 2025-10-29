let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#new-btn");
let result=document.querySelector(".res");
let msg=document.querySelector("#msg");
let turnO = true;

gsap.from("h1",{
    opacity:0,
    duration:1,
    delay:1
})

gsap.from(".game",{
    opacity:0,
    duration:1,
    stagger:0.3
})

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const resetGame=()=>{
    turnO=true;
    enableBoxes();
    result.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        box.style.color="orange";
        box.innerText="O";
        turnO=false;
       }else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;

      checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    result.classList.remove("hide");
    disableBoxes();
}
 
const checkWinner=()=>{
     for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
         let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
      
        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
     }
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
