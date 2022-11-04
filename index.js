let B = document.getElementById("display")
let buttons = Array.from(document.getElementsByClassName("button"))
buttons.map(buttons =>{
    buttons.addEventListener("click",(e)=>{
        switch (e.target.innerText) {
            case "C" :
                B.innerText=" "
                break
            case "=":
                try{
                    B.innerText=Number(eval(B.innerText))
                    break
                }
                catch{
                    B.innerText="Not Valid"
                    break
                }
            case "Del":
                    B.innerText=B.innerText.slice(0,-1)
                    break
            case "%":
                try {
                    B.innerText=eval(B.innerText/100)
                break
                } catch {
                    B.innerText="Not Valid"
                }
                
            default:
                B.innerText+=e.target.innerText
        }
        
    })
})