
const cities =['Ciudad de mexico', 'Bogota', 'Lima', 'Buenos Aires', 'Guadalajara'];

//Math.floor retorna el maximo valor , recibe el valor random incluido en la funcion
// y lo multiplico por cities.length


const randomString = () =>{
    const string = cities[Math.floor(Math.random() * cities.length )];
    return string;  
};


const reverseString2 = str  =>{
    return new Promise((resolve,reject)=>{
        if(!str){
            reject(Error('error'))
        }
        resolve(str.split("").reverse().join(""))
        
    });
};


module.exports = randomString;