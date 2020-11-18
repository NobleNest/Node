//-----------------------------------------------------------HTTP-----------------------------------------------------------------------------
const http = require('http');                                                                   //підключення модуля

const server = http.createServer((req, resp) => {                                               //створення серверу
    if(req.url == "/"){                                                                         //перевірка адреси
        resp.write("Hello from server")                                                         //відповідь до сторінки
        
    } else {
        resp.write("About from server")
    }
    resp.end()                                                                                  //завершення відповіді
})

server.listen(3000, () =>{                                                                      //прослуховування за вказаним портом(3000) та адресою(localhost за замовчуванням)
    console.log("Server running!.....")                                                         
})