const mensajesRespuesta = {
free : "Solo puedes tomar los cursos gratis", 
basic : "Puedes tomar casi todos los cursos de Platzi durante un mes", 
expert : "Puedes tomar casi todos los cursos de Platzi durante un año", 
expertPlus : "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" 
};

function tipoSuscripcion(suscripcion) {
   if (mensajesRespuesta[suscripcion]) {
      console.log(mensajesRespuesta[suscripcion]);
   }
}

tipoSuscripcion("free")