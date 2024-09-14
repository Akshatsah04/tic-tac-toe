let butt = document.querySelectorAll(".box");
let resetbutt = document.querySelector(".reset");
let msg = document.querySelector("p");
let ng = document.querySelector(".new");



let wincon = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let afterwin=(winner)=>{
    for(let p of butt){
        p.disabled=true;
    }
    msg.innerText=`congratulation! winner is ${winner}`;
}
let afterreset=()=>{
    for(let p of butt){
        p.disabled=false;
        p.innerText="";
    }
    
}


let turn0=true;
butt.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if(turn0){
            box.innerText="o";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;

        checkwin();
    }); 
    
});

const checkwin =()=>{
    for(posi of wincon){
        let posi1 = butt[posi[0]].innerText;
        let posi2 = butt[posi[1]].innerText;
        let posi3 = butt[posi[2]].innerText;

        if(posi1 !="" && posi2 !="" && posi3!=""){
            if(posi1 == posi2 && posi2 == posi3){
                console.log("winner is " , butt[posi[0]].innerText  );
                afterwin(posi1);
                msg.classList.remove("hide");
                ng.classList.remove("hide");
            }
        }
    }

}



// reset buttttttton

const resetgame=()=>{
    turn0=true;
    afterreset();
    msg.classList.add("hide");
    ng.classList.add("hide");
}

resetbutt.addEventListener("click" , resetgame);
ng.addEventListener("click" , resetgame)