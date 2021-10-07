const fs= require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5 , list = false, hasta =10) =>{
    try {
        

        let salida, consola = '';
        salida = `=============\n Tabla del ${base}\n=============\n`; 

        for(let i = 1; i<=hasta; i++){
            //interpolacion de strings "ventajas de esto"
            consola += (`${base} ${'x'.red} ${i} ${'='.red}' ${base*i}\n`);
            salida += (`${base} ${'x'} ${i} ${'='}' ${base*i}\n`);
        }
        if(list==true){
            console.log('=============='.red);
            console.log(' Tabla del:', colors.blue(base) );
            console.log('=============='.red);

            console.log(consola);                    
        }
        //si sucede error hay que usar try-catch
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw(err);
    }
     
}

//module es un objeto global que existe en node
module.exports = {
    crearArchivo
}