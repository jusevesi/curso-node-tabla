const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');

//option ('l')
//listar
//boolean
//default: false
//

console.clear();

//console.log(argv);


// console.log('base: yargs',argv.base);


//no se va volver a hacer en curso
// const [,,arg3 = 'base=5' ] = process.argv;
// const [, base = 5] = arg3.split('=');


// const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
     .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
     .catch(err => console.log(err));


