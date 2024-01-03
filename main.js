
//Esto agrega el valor a la pantalla de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor;
}

//Borrar datos de la pantalla 
function borrar(){
    document.getElementById('pantalla').value = '';

}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}