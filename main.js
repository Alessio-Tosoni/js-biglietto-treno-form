

let btn = document.querySelector("#myBtn")
btn.addEventListener("click", function(){
    let nome =  document.getElementById("nome").value;
    let km = document.getElementById("km").value;
    let eta =  document.getElementById("eta").value;
    document.getElementById("secondo").style.display ="block"
    
    const z = 0.21
    const prezzo = (km * z)
   if  (eta == "minorenne") {
       prezzoScontato = (prezzo -(prezzo * 0.2)).toFixed(2)
       document.getElementById("costo").innerHTML= prezzoScontato
       document.getElementById("tipobiglietto").innerHTML= "ridotto minorenni"
   } else if(eta == "senior"){
       prezzoScontato = (prezzo -(prezzo * 0.4)).toFixed(2)
       document.getElementById("costo").innerHTML= prezzoScontato
       document.getElementById("tipobiglietto").innerHTML= "ridotto senior" 
   } else{
       prezzoScontato = (prezzo).toFixed(2)
       document.getElementById("costo").innerHTML= prezzoScontato
       document.getElementById("tipobiglietto").innerHTML= "standard"
   }
    document.getElementById("nomeb").innerHTML= nome
    document.getElementById("carrozza").innerHTML= Math.floor(Math.random()*10)+1

const numeroBiglietto = 90000 + Math.floor(Math.random()*10000)
document.getElementById("numerobiglietto").innerHTML = numeroBiglietto
})

let btnc = document.querySelector("#cancella")
btnc.addEventListener("click", function(){
    document.getElementById("nome").value= ""
    document.getElementById("km").value = ""
    document.getElementById("eta").value = "minorenne"
})
