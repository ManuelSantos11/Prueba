//Mi funcion
function miFuncion(){
    var miVariable0="Soy una variable que varia";
    //me veras 3en accion cuando abras tu pagina
    console.log(miVariable0);

    miVariable0 = "5";

    if(miVariable0>=0, miVariable0++ );
    console.log(miVariable0 * miVariable0);
}

// Nueva funcion
function bucles(){
    for(var x = 0; x < 10; x++){
        console.log(x);
    }
}

function bucles1(){
    for(var y = 10; y > 0; y--){
        console.log(y)
    }
}

function bucles2(){
    for(var x = 0; x < 10; x+=2){
        console.log(x);
    }
}

// Funcion para bucles while y do while
function buclesWhile(){
    var contador = 0;
    while (contador < 10) 
    {
        console.log(contador);
        contador++;
    }
}
// Funcion para bucles while y do while
function buclesWhile1(){
    var contador = 10;
    while (contador > 0) 
    {
        console.log(contador);
        contador--;
    }
}
// Funcion para bucles while y do while
function buclesDoWhile(){
    var contador = 0;
    do{
        console.log(contador);
        contador++;
    }
    while (contador < 10)
    //   while (contador++, contador < 10);   
}

function operacionesAritmeticas(){
    //Definir variables
    //Suma
    var op1 = 3;
    var op2 = 20;
    var op3 = 5;
    var res = 0;

    res = (op1 + op2);
    console.log("Suma!");
    console.log(res);
   
    //////////////////////
    console.log("Resta!");
    res= op1 - op2 - op3;
    console.log(res);
    ///////////////////////
    console.log("Multiplicacion!");
    res= op1 * op2 * op3;
    console.log(res);
    ///////////////////////
    console.log("Division!");
    res= (op1 * op2) / op3;
    console.log(res);
    //////////////////////
    console.log("Modulo!");
    res= op1 % op2;
    console.log(res);
    //////////////////////
    console.log("Exponencial!");
    res= op1**3;
    console.log(res);
     //////////////////////
     console.log("Raiz cuadrada!");
     res= Math.sqrt (op2);
     console.log(res);
     //////////////////////
     console.log("Logaritmo!");
     res= Math.log (op2);
     console.log(res);
     res= Math.log (-op2);
     console.log(res);
     res= Math.log (0);
     console.log(res);

}
function operacionesLogicas(){
    //Valores Boolean
    var a = true;
    var b = false;
    var c = (b && c);
    console.log(b && c);
    // and
    if(!(b && c)){
        console.log(b);
        console.log(c);
    }
    // OR
    console.log("!OR");
    var c = (a || b);
    console.log(c);
 }
// Manejo de arreglos
 function manejarArreglos(){
     // Iniciar un arreglo con todos sus indices como enteros
    var miArreglo = [5,1,3,7,8,0,9,4];
    //  POSICION     0 1 2 3 4 5 6 7
    // Mostrar el Arreglo
    console.log("Inicializar y mostrar todos los elementos de mi arreglo");
    for(var t=0; t<miArreglo.length; t++){
        console.log("Posicion o indice"+t+" : "+miArreglo[t]);
    }

    // Busqueda Binaria
    console.log("Buscar en mi arreglo un numero y que termine cuando lo encuentre");
    var valorReferencia = 9;
    for(var t=0; t<miArreglo.length; t++){
        if(miArreglo[t]=== valorReferencia){
            console.log("Valor encontrado en :"+t+" - "+valorReferencia);
            break;
        }
        else{
            console.log(miArreglo[t]);
        }   
    }

     // Busqueda Binaria con while
     console.log("Buscar en mi arreglo un numero y que termine cuando lo encuentre");
     var t = 0;
     var valorReferencia = 0;
     var bandera = false;
     while (!bandera && (t<miArreglo.length)) {
         console.log(miArreglo[t]+" : " +valorReferencia);
         console.log(bandera);
         t++;
     }
    console.log("Valor encontrado en : "+t+" - "+valorReferencia);

    //foreach
    console.log("For each");
}
//Variable global, puede ser usada en cualquier funcion
cadena = "Soy global";

//Funcion para llamar alertas
function misAlerts(){
    //Enviar la alerta
    alert("Holaaaa..."+ cadena);
}

//Variable global objeto
var persona = {
    nombre : "Juan",
    edad : 25,
    colorDeOjos : "verde"
}

function manejarObjetos(){
    console.log(Object.keys(persona));
    //console.log(persona.random);
    var dinamico = "edad";
    console.log(persona);
    console.log(persona.nombre);
    console.log(persona["edad"]);
    console.error(persona[dinamico]);
    console.log()
}

var Carro = {
    Marca : "Nissan",
    Modelo : "Versa",
    Color : "Negro",
    Año : 2018,
    Costo : "$ 145000"
}
function Carros(){
    console.log(Object.keys(Carro));
    console.log(Carro);
    console.log(Carro.Modelo);
    console.log(Carro["Costo"]);
}