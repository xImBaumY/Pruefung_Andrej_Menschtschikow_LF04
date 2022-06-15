let lkRechnung = () =>{
    let wert1 = parseInt(document.getElementById("betrag").value)
    let ausgabe = document.getElementById("ergebnis")


    if(isNaN(wert1)){
        ausgabe.value = 420
    }
}