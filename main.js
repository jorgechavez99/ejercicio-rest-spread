//Ejercicios spread/rest
/* 1.Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los argumentos.
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26*/


const sumEveryOther=(...numero)=>{

    let resultado=0;
    resultado=numero.reduce((a,b)=>a+b);

    return resultado

}

console.log("ejercicio 1",sumEveryOther(6, 8, 2, 3, 1)); //20
console.log("ejercicio 1",sumEveryOther(11, 3, 12)); //26




/* 2.Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings) y retorne la suma solo de los números.
addOnlyNums(1, "perro", 2, 4); //7*/


const addOnlyNums=(...numero)=>{

     let resultado=0;
    numero.forEach((item)=>{
        if(typeof item === "number"){
            resultado += item;

        }
        
    })
return resultado
}
console.log("ejercicio 2",addOnlyNums(1, "perro", 2, 4)); //7*



/* 3.Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4*/


let countTheArgs=(...argumento)=>{

    let respuesta = argumento.length

return respuesta

}

console.log("ejercicio 3",countTheArgs("gato", "perro")); //2
console.log("ejercicio 3",countTheArgs("gato", "perro", "pollo", "oso")); //4*/

/* 4.Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).*/

const combineTwoArrays=(...arg)=>{
    return arg
}
console.log("ejercicio 4",combineTwoArrays(...[1,2,3],...[4,5,6]))


/* 5.Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

onlyUniques("gato", "pollo", "cerdo", "cerdo"); //['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]*/

const onlyUniques=(...argumento)=>{
    

    return argumento.filter((arg1,arg2)=>
        argumento.indexOf(arg1) === arg2
    
    )

}
console.log("ejercicio 5",onlyUniques("gato", "pollo", "cerdo", "cerdo")); //['gato', 'pollo', 'cerdo']

console.log("ejercicio 5",onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]

/* 6.Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]); // [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]*/


const combineAllArrays=(...argumento)=>{

    return argumento.flat(Infinity); 

}

console.log("ejercicio 6",combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1])); // [3, 6, 7, 8, 2, 7, 3, 1]

console.log("ejercicio 6",combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1])); // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

/* 7.Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.*/

const sumAndSquare=(...numero)=>{

    let resultado=0;
    

    numero.forEach((item)=> {
            resultado += Math.pow(item,2)
        })
    
return resultado
}

console.log("ejercicio 7",sumAndSquare(2,3,4));
console.log("ejercicio 7",sumAndSquare(2));
