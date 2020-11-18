//-----------------------------------------------------------FS-----------------------------------------------------------------------------
const fs = require('fs');                                                                   //підключення модуля
const path = require('path')                                                                //підключення модуля

fs.mkdir(path.join(__dirname, 'notes'), err =>{                                             //створення папки
    if(err) throw err                                                                       //обробка помилки
    
    console.log('Dir created')                                                              //вивід повідомлення про успіх
})

fs.writeFile(                                                                               //створення файла
    path.join(__dirname, 'notes', 'mynotes.txt'),                                           //за цим шляхом
    'Hello, World!',                                                                        //із цим текстом
    (err) => {                                                                              
        if(err) throw err                                                                   //обробка помилки
        
        console.log('File created')                                                         //вивід повідомлення про успіх

        fs.appendFile(                                                                      //зміна файлу
            path.join(__dirname, 'notes', 'mynotes.txt'),                                   //цього файлу
            ' From append file',                                                            //додаємо цей текст
            (err) => {
                if(err) throw err                                                           //обробка помилки
                
                console.log('File changed')                                                 //вивід повідомлення про успіх
        
                fs.readFile(                                                                //зчитування вмісту файлу
                    path.join(__dirname, 'notes', 'mynotes.txt'),                           //за цим посиланням
                    'utf-8',                                                                //із цим кодуванням
                    (err, data) => {
                        if(err) throw err
                        console.log(data)                                                   //вивід вмісту файла
                    }
                )
            }
        )
    }
)