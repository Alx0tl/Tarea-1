// Crea una función asincrónica que espere 2 segundos y luego devuelva un mensaje. Usa await para esperar su resultado e imprimirlo.

function esperaDos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('¡Operación completada!');
      }, 2000);
    });
  }

async function ejecutarOperacion() {
    console.log('Inicio de la operación');
    const resultado = await esperaDos();
    console.log(resultado);
    console.log('Fin de la operación');
    }
    ejecutarOperacion();