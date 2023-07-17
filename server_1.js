// ------- CREAR SERVIDOR WEB SIN FRAMEWORK - MODULO GLOBAL HTTP ------- // 

// 1.IMPORTAR EL MODULO GLOBAL HTTP //
const http = require('http'); /* require() -> se requiren los archivos o modulos de afuera y trabajo con CommonJS*/

// NOTA: Hay 2 de trabajar en Node.JS: CommonJS y ESmodule 

// 3. FUNCION REQUEST. Hacer una funcion para usar una Request
/* function requestListener(req, res){
    es mejor pasar como funcion anonima, ya que este metodo no es la mejor forma
}  */ 

// 2. CREA EL SERVIDOR WEB MANERA 1. Llamo la variable y le pongo un punto para ver los metodos y funciones nativas asociadas a la variable. 

/* http.createServer(requestListener);  */ 
// 4. ARGUMENTO DEL CREATESERVER. Llevamos la funcion como argumento al createServer (sin parentesis) // 

// callback -> funcion dentro de una funcion ; es una promesa, una devolucion de llamada (en Node Js hay muchos callbacks).


// 5. CREAR EL SERVIDOR WEB MANERA 2. Funcion anomina directamente como parametro. Se puede con function expresion o function declaration.

    // 5.1. Con function declaration
    /* http.createServer(function(req, res){
    }); */

        //5.1.1. Arrow Function
        const server = http.createServer((req,res)=>{
            /* console.log(req.url, req.method, req.headers); */ 
            /* Todo el objeto que aparece en el terminal es de la request */

            const url = req.url;

            //7. ROUTING 
            if(url == '/'){
                res.write('<html>');
                res.write('<head><title> My first responde page </title></head>');
                res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">Send</button> </body>');
                res.write('</html>');
                return res.end();
                
            }


            //5.1.3. Cerrar o salir del ciclo continuo de eventos
            /* process.exit(); */ 

            // 6. GESTION DEL RES (Buffers en response). Enviando respuestas.
            res.setHeader('Content-Type', 'text/html'); 
            res.write('<html>');
            res.write('<head><title> My first responde page </title></head>');
            res.write('<body><h1>Hello from Hode JS duuuuuuude</h1> </body>');
            res.write('</html>');
            res.end();

        });

        //5.1.2. Escuchar por un puerto: el servidor que concientiza que le llega una req. 
        server.listen(4000);