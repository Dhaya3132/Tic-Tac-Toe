let butt01 = document.querySelectorAll(".button-option");
let restartbutton = document.getElementById("restart");

var count=0;

let firstturn = true;
butt01.forEach((element) => {
    element.addEventListener("click" , ()=>
    {
       if(firstturn)
       {
        firstturn=false;
        element.innerText = "X";
        element.disabled=true;
       }
       else{
        firstturn=true;
        element.innerText="O";
        element.disabled=true;
       }
       winner();
        count+=1;
        if(count==9)
        {
        checkdraw();
        }
    });
});

restartbutton.addEventListener("click", ()=>{
    document.getElementById("message").innerHTML="";
    butt01.forEach((element)=>
    {
        element.innerHTML="";
        element.disabled=false;
        firstturn = true;
    });
});

let winnerpatter=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const winner = () => {
    for(let i of winnerpatter)
    {
        let[ele1 , ele2 , ele3] = [
            butt01[i[0]].innerHTML,
            butt01[i[1]].innerHTML,
            butt01[i[2]].innerHTML,
        ];
    if(ele1!="" && ele2!="" && ele3!="")
    {
        if(ele1==ele2 && ele2==ele3)
        {
            winnerchecker(ele1);
        }
    }
}
};

const checkdraw = ()=>
{
    document.getElementById("message").innerHTML="ITS DRAW";
};




function winnerchecker(letter)
{
    if(letter=='X')
    {
        document.getElementById("message").innerHTML= "X WINS"
    }
    else{
        document.getElementById("message").innerHTML="O WINS";
    }
};