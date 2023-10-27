console.log(ciao)
let btn = document.querySelector("#myBtn")
btn.addEventListener("click" function(){
    document.getElementById("nome").value;
    document.getElementById("km").value;
    document.getElementById("eta").value;
    console.log(miobottone)
})

const z = parseFloat(0.21)

const prezzo = parseFloat(km * z)

if ( eta < 18) {
    prezzoScontato = parseFloat(prezzo -(prezzo * 0.2)).toFixed(2)
    document.getElementById("costo").innerHTML= prezzoScontato
} else if(eta >= 65){
    prezzoScontato = parseFloat(prezzo -(prezzo * 0.4)).toFixed(2)
    document.getElementById("costo").innerHTML=  prezzoScontato
} else{
    prezzoScontato = parseFloat(prezzo).toFixed(2)
    document.getElementById("costo").innerHTML= prezzo
}

document.getElementById("nomeb").innerHTML= nome
document.getElementById("costo").innerHTML= prezzoScontato