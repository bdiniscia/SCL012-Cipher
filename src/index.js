
// Función de codificar
let coding = document.getElementById("arrow1");

coding.addEventListener("click", () => {
    let newOffset = document.getElementById("key").value;
    let newCode = document.getElementById("enterMessage").value;
    if (newOffset== "" || isNaN(newOffset)) {
        alert("Introduce un número válido en Llave Secreta");
    } else { 
        cipher.encode(newOffset,newCode);
        document.getElementById("finalCode").innerHTML = cipher.encode(newOffset,newCode); 
    }
});

// Función de descodificar

let decoding = document.getElementById("arrow2");
decoding.addEventListener("click", () => {
    let newOffset = document.getElementById("key").value;
    let newCode = document.getElementById("enterCode").value;
    if (newOffset== "" || isNaN(newOffset)) {
        alert("Introduce un número válido en Llave Secreta");
    } else { 
        cipher.decode(newOffset,newCode);
        document.getElementById("finalDecode").innerHTML = cipher.decode(newOffset,newCode);
    } 
});

// Funciones para los botones de copiar

let copyButton1 = document.getElementById("copy-1");
copyButton1.addEventListener("click", () => {
    let copyText = document.getElementById("finalCode").textContent;
    let copySelec = document.createElement("textarea");
    document.body.appendChild(copySelec);
    copySelec.value = copyText;
    copySelec.select();
    document.execCommand("copy");
    document.body.removeChild(copySelec);
});

let copyButton2 = document.getElementById("copy-2");
copyButton2.addEventListener("click", () => {
    let copyText = document.getElementById("finalDecode").textContent;
    let copySelec = document.createElement("textarea");
    document.body.appendChild(copySelec);
    copySelec.value = copyText;
    copySelec.select();
    document.execCommand("copy");
    document.body.removeChild(copySelec);
});
