// Crea un array de objetos donde cada objeto tenga un nombre y una edad. Luego, muestra en consola el nombre de cada persona usando forEach.

const personas = [{nombre: "Lucas", edad: 25},{nombre: "Jose", edad: 23},{nombre: "Miguel", edad: 18},{nombre: "Maria", edad: 32}];

personas.forEach((elemento) => {
	console.log(`Nombre: ${elemento.nombre}`);
})