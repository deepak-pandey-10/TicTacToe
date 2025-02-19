let boxes = document.querySelectorAll(".box")
let playerxscore = document.querySelector(".xscore")
let playeroscore = document.querySelector(".oscore")

let playerx = 0
let playero = 0
let turnX = true

const winpatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("box was clicked")
        if (turnX===true){
            box.innerText = "X"
            box.id = "x"
            turnX = !turnX
        }
        else{
            box.innerText = "O"
            box.id = "o"
            turnX = !turnX
        }
        box.disabled = true
        checkwinner()
        
    })

})


const checkwinner = ()=>{
    for (let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1!= "" && pos2 != "" && pos3!=""){
            if (pos1 === pos2 && pos2 === pos3){
                console.log("winner")
                if (pos1==="X"){
                    playerx+=1
                    playerxscore.innerText = playerx
                    


                }
                if (pos1==="O"){
                    playero+=1
                    playeroscore.innerText = playero
                }
                boxes.forEach(box => box.disabled = true);

                boxes.forEach((box, index) => {
                    if (!pattern.includes(index)) {
                        box.innerText = "";
                    }
                


            }
        )}
    }
}
}

let newgamefn = ()=>{
    boxes.forEach((box)=>{
        box.innerText = ""
        box.disabled = false
    })
}

let newgame = document.querySelector(".new")

newgame.addEventListener("click" , newgamefn)

let resetfn = ()=>{
    boxes.forEach((box)=>{
        box.innerText = ""
        box.disabled = false
    })
    playerxscore.innerText = "0"
    playeroscore.innerText = "0"
}

let reset = document.querySelector(".reset")

reset.addEventListener("click" , resetfn)