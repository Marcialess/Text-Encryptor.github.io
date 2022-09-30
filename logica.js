const inputTexto = document.querySelector(".input-Texto")
const mensaje = document.querySelector(".mensaje")
const textmensaje = document.querySelector(".textmensaje")


function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    textmensaje.value = "none";
}
function encriptar(stringEncriptada){
    let nidoCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < nidoCodigo.length; i++){
        if (stringEncriptada.includes(nidoCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(nidoCodigo[i][0],nidoCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const TextoEncriptado = desEncriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    inputTexto.value = "";
}
function desEncriptar(stringDesencriptada){
    let nidoCodigo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < nidoCodigo.length; i++){
        if (stringDesencriptada.includes(nidoCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(nidoCodigo[i][1],nidoCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

function btnCopiar(){
    copiar();
}
function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
}