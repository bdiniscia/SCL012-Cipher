
// Función de codificar
let coding = document.getElementById("arrow1");

coding.addEventListener("click", () => {
    let newOffset = document.getElementById("key").value;
    let newCode = document.getElementById("enterMessage").value;
    if (newOffset== "" || isNaN(newOffset)) {
        alert("Coloca un número válido en Llave Secreta");
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
        alert("Coloca un número válido en Llave Secreta");
    } else { 
        cipher.decode(newOffset,newCode);
        document.getElementById("finalDecode").innerHTML = cipher.decode(newOffset,newCode);
    } 
});
