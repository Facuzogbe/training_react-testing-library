// La diferencia entre toMatch y toContain en Jest (un framework de pruebas para JavaScript) es la forma en que se comparan los valores.

// toContain se utiliza para comprobar si un valor especificado se encuentra dentro de un arreglo o una cadena. Por ejemplo:

// Copy code
// expect(['apple', 'banana', 'orange']).toContain('banana');
// expect('Hello World').toContain('World');
// Por otro lado, toMatch se utiliza para comprobar si un valor cumple con un patrón específico, utilizando expresiones regulares. Por ejemplo:

// Copy code
// expect('1234-5678-1234-5678').toMatch(/\d{4}-\d{4}-\d{4}-\d{4}/);
// expect('example@example.com').toMatch(/^\S+@\S+\.\S+$/);


const text = "hola mundo";
const fruits = ['manzana', 'melon', 'banana'];


//comprueba si en la variable text , hay un valor llamado hola
test('debe contener un texto', () => {
    expect(text).toMatch(/mundo/);

});

// comprueba si en el array fruits hay un string llamado banana
test('¿tenemos una banana?', () => {
    expect(fruits).toContain('melon');
});

// comprueba que el numero 10 es mayor que 9
test('Mayor que', () => {
    expect(100).toBeGreaterThan(99);

})

// comprueba si lo que esta recibiendo es un booleano en este caso falso

test('verdadero', () => {
    expect(false).toBeFalsy();
});

// split: convierte el string en un array y lo separa por elementos
// reverse: cambia la posicion de los elementos 
// join : vuelve a unirlos  generando un string
//callback: funcion que recibe una funcion como parametro

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test('probar un callback', () => {
    reverseString('hola', (str) => {
        expect(str).toBe('aloh');
    })
})

// Una promesa es un objeto devuelto al cual se adjuntan funciones callback , 
//en lugar de pasar callbacks a una función. Llamamos a esto una llamada a función asíncrona.

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('error'))
        }
        resolve(str.split("").reverse().join(""))

    });
};

test('Probar una promesa', () => {
    return reverseString2('Hola')
        .then(string => {
            expect(string).toBe('aloH')
        })
});

test('Probar async/await', async () => {
    const string = await reverseString2('hola');
    expect(string).toBe('aloh');

});

// afterEach(()=> console.log('Despues de cada prueba'));
// afterAll(() => console.log('Despues de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));
