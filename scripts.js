var1 = document.querySelector("#btnn");
var1.innerText="Click me to chnage the Random color";
var1.style.padding = "20px";
var1.style.background = "#808080";
var1.style.color = "limeblue";
console.log(var1);

const button = document.getElementById("btnn");
const a = document.getElementById("a")
const randomcolor = () => {
    let val = "0123456789ABCDEF";
    let cons = "#";

    for(let i = 0; i < 6; i++) {
      cons = cons + val[Math.floor(Math.random() * 16)];
      
    }
    return cons;
  };
  console.log(randomcolor());

  button.onclick = () => {
    document.body.style.backgroundColor = randomcolor()
  }
  
