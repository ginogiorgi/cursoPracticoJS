VARIABLES Y OPERACIONES    
    1.
         a) Una variable es un espacio almacenado en memoria, donde podemos guardar informacion.
        b) Declarar es crear una variable, y inicializarla es darle un valor a esa variable.
        c) El operador suma +.

    2.
        Nombre: String.
        Apellido: string.
        Nombre de usuario de platzi: String.
        Edad: Number.
        Correo Electronico: String.
        Mayor de edad: Boolean.
        Dinero Ahorrado: Number.
        Deudas: Number.

    3.
        let nombre = "Gino"
        let apellido = "Giorgi"
        let usuario = "ginogiorgi"
        let edad = 24
        let correo = "ginogiorgi@hotmail.com"
        let esMayoriaedad = true
        let dineroAhorrado = 30000
        let deudas = 8500

    4.
        a) Console.log("Nombre Completo: ", nombre + " " + apellido)
        b) Console.log("Dinero Real: ", dineroAhorrado - deudas)


FUNCIONES
    1.
        a) Capsulas de bloques de codigo para reutilizarlos y ejectarlos en el futuro.
        b) Cuando vamos a utilizar un bloque de codigo de forma repetida o para mejorar la legibilidad del codigo.
        c) Los parametros son las variables que utilizara nuestra funcion. Al llamarla, debemos darle valores a esos parametros(argumentos).
     2. 
        function introduccion(name, nickname, lastname){
        const completeName = name + lastname;

        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");   
        }

        introduccion("Gino ", "chese890", "Giorgi");


CONDICIONALES
    1.
        a) Un bloque de codigo que se ejecuta dependiendo de una condicion.
        b) If..else, que permite hacer validadiones completamente distintas; y switch, donde todos los cases se comparan con la misma variable o condicion.
        c) Las funciones pueden encapsular condicionales.

    2.
        const tipoDeSuscripcion = "Basic";

        if (tipoDeSuscripcion==="Free") {
            console.log("Solo puedes tomar los cursos gratis");
        }
        else if (tipoDeSuscripcion==="Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }
        else if (tipoDeSuscripcion==="Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }
        else if (tipoDeSuscripcion==="ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
    3.
        const mensajesRespuesta = {
        free: "Solo puedes tomar los cursos gratis", 
        basic: "Puedes tomar casi todos los cursos de Platzi durante un mes", 
        expert: "Puedes tomar casi todos los cursos de Platzi durante un año", 
        expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" 
        };

        function tipoSuscripcion(suscripcion) {
            if (mensajesRespuesta[suscripcion]) {
                console.log(mensajesRespuesta[suscripcion]);
            }
        }

        tipoSuscripcion("free")

CICLOS
    1.
        a) Un bucle de codigo que se repite hasta que se cumple una condici
        n.
        b) For, While, do While.      
        c) Es un ciclo con una condicion que nunca se cumple, por lo que el proceso nunca termina.
        d) Si, es posible

    2. 
        a) 
```js
            let i = 0
            while (i < 5){
                console.log("El valor de i es: " + i);
                i++;
            }
```
        b) 
            let i = 10
            while (i >= 2){
                console.log("El valor de i es: " + i);
                i--;
            }
    3.
        while (i != 4){
            var i = prompt("Cuanto es 2 + 2?");
        }
        console.log("Felicitaciones!!");
        
LISTAS 
    1.
        a)Es una lista de elementos.    
        b)Es una lista de elementos pero cada elemento tiene un nombre clave.
        c)Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demas; y un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.
        d)Sí. Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.
    
    2.
        function primerElemento(array){
            console.log("El primer valor es:"+ array[0]);
        }
    
    3.
        function arrayTodo(array){
            for (i = 0; i < array.length; i++){
                console.log("elemento numero "+ (i + 1) +": "+ array[i]);
            }
        }
    
    4.
        function objectTodo(objeto){
            cost arr = Object.values(objeto);

            for (i = 0; i<arr.length; i++) { 
                console.log(arr[i]);
            }
        }
