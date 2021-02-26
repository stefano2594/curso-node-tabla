
//const fs = require('fs'); // libreria para guardar en un archivo file system

const { crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors=require('colors');

/* const argb= require('yargs')
              .option('l',{
                 alias:'ele',
                 type:'boolean',
                 demandOption:true,
                 default: false
              })
              .check( ( argv, options)=>{
               if( argv.l != true){
                  throw 'ele tiene que ser true'
               }
               return true;
            })
            .argv; */

console.clear();

//console.log(process.argv); muestra argumentos en estado original y con todo el path( direccion)
console.log(argv); // muestra argumentos como objeto , mas ordenado y listo para hacer modificaciones

console.log('base:yargs',argv.b); // imprimir el argumento que posteaste 
console.log('base:yargs',argv.l);
//const [ ,,arg3 = 'base=5'] = process.argv; 

//const [, base ] = arg3.split('=');// el igual es para poner node app base=5 osea reconozca el = y ejecute la variable

//console.log(base);

/* 
const base = 3 ; */

 crearArchivo(argv.b , argv.l , argv.h)
   .then( nombreArchivo=>console.log(nombreArchivo.rainbow,'creado'.green))
   .catch(err=> console.log(err)); 





/* 
let salida='';
for( let i=1;i<=12 ;i++){
   salida +=`${base} X ${i} = ${base*i}\n`;
   
}
console.log(salida); */

// version antigua con writeFile

/* fs.writeFile (`tabla-${base}.txt`,salida,(err) => {
   if(err) throw err;
   console.log(`tabla-${base}.txt creada`)
}) */

// version actual 
/* fs.writeFileSync(`tabla-${base}.txt`,salida);

console.log(`tabla-${base}.txt creado`); */
