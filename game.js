let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#rest-btn");

let turn1 = true;

let  winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
     
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn1){
            box.innerText="o";
            turn1=false;
        } else {
            box.innerText="X";
            turn1=true;
        }
        box.disabled=true;
        chackWinner();
    });
});

const chackWinner =() =>{
   
    for(let pattern of winPatterns) {
    console.log(pattern);
    }

}