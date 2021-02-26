const argv= require('yargs')
              .option('b',{
                 alias: 'base',
                 type: 'number',
                 demandOption:true,
                 describe:' Es la base de la tabla de multiplicar'
              })
              .option('h',{
               alias: 'hasta',
               type: 'number',
               demandOption:true,
               describe:' El limita hasta donde va multiplicar'
            })
              .option('l',{
               alias:'listar',
               type:'boolean',
               demandOption:true,
               default: false,
               describe:' Mostrar tabla en consola'
            })
              .check( ( argv, options)=>{
                 if(isNaN( argv.b)){
                    throw 'La base tiene que ser un número'
                 }
                 return true;
              })
              .argv;


module.exports = argv;