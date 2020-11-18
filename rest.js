//-----------------------------------------------------------REST-----------------------------------------------------------------------------
const http = require('http');                                                                   //підключення модуля

const server = http.createServer((req, resp) => {                                               //створення серверу
    if(req.url == "/"){                                                                         //перевірка адреси
        resp.writeHead(200, {                                                                   //встановлення заголовку відповіді
            'Content-type': 'text/html'                                                         //тип відповіді
        })

        resp.end("<h1>Hello</h1>")                                                              //відповідь
    }
    if(req.url == "/users"){                                                                    //перевірка адреси
        resp.writeHead(200, {                                                                   //встановлення заголовку відповіді
            'Content-type' : 'text/json'                                                        //тип відповіді
        })

        const users = [                                                                         //дані для відповіді
            { name: "Dima", age:19},
            { name: "Not Dima", age:20}
        ]

        resp.end(JSON.stringify(users))                                                         //відповідь
    }
})

server.listen(3000, () =>{                                                                      //прослуховування за вказаним портом(3000) та адресою(localhost за замовчуванням)
    console.log("Server running!.....")                                                         
})