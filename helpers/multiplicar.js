
const fs=require('fs');
const colors= require('colors');
const crearArchivo = async ( base = 3 , listar= false , hasta = 1) => {
    
    
    try{
        
        let salida=''; 
        let consola='';
        
        for( let i = 1;i<=hasta ;i++){
            salida +=`${base} X ${i} = ${base * i}\n`;
            consola +=`${base} ${'X'.green} ${i} ${'='.green} ${colors.yellow(base*i)} \n`
              }
        
    if(listar){
    console.log( `==================================================`.yellow);
    console.log( '--------------- Tabla del:'.yellow,colors.blue(base) ,'---------------'.yellow);
    console.log( `==================================================`.yellow);

    console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

    return ( `tabla-${base}.txt `)
    
    }catch(err){
    throw err
}
    

    /* let salida=''; 
    for( let i=1;i<=12 ;i++){
    salida +=`${base} X ${i} = ${base*i}\n`; */

  //  console.log(salida);

  //  fs.writeFileSync(`tabla-${base}.txt`,salida);

   
}

module.exports = {
   // crearArchivo : crearArchivo esto es redundante si la propiedad apunta a lo mismo
   crearArchivo
}