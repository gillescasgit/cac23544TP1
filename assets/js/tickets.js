function getValorbyID(id){
    return document.getElementById(id).value;
}



function borrar(){
    console.log('hallo, guten tag');
}

function calcularTotal(){
    let id='res'
    let total='-'
    debugger

    if(validarCantidad()){
        let res =(200 * Number(getValorbyID('cantidad'))) - (200 * Number(getValorbyID('cantidad')) * obtenerDecuento());
        total=res;
    }

    setValorbyID(id,total);    
}


function obtenerDecuento(){
    var retorno=0;

    let opcionValor = document.getElementById('opciones').value;

    console.log(opcionValor );

switch (opcionValor)
    {
        case "Estudiante":
            retorno=0.80;
            break;

        case "Trainee":
            retorno=0.50;
            break;

        case "Junior":
            retorno=0.15;
            break;
        case "General":
            retorno=0.0;
            break;
        default:
            retorno=0.0;
            break;

        }
    return retorno;
}

function validarCantidad(){

    let cantidad=document.getElementById('cantidad').value;
    debugger

    if(Number(cantidad<1))
        return false;

    return true;

}
function setValorbyID(id,valor){
    document.getElementById(id).innerHTML = valor;
}
