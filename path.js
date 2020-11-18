//-----------------------------------------------------------Path-----------------------------------------------------------------------------
const path = require('path')                                                            //підключення модуля

console.log("Path -- " + __filename)                                                    //виводимо у косоль повний шлях до файлу
console.log("Basename -- " + path.basename(__filename))                                 //виводимо у косоль назву останнього файла\каталогу за вказаним шляхом
console.log("Dirname -- " + path.dirname(__filename))                                   //виводимо каталоги на шляху до файлу
console.log("Extname -- " + path.extname(__filename))                                   //виводимо у косоль розширення файла

console.log(path.parse(__filename))                                                     //виводимо у косоль всю інформацію з змінної __filename

console.log("Join -- " + path.join(__dirname, 'test', 'second.html'))                   //об'єднує всі вказані компоненти в 1 шлях використовуючи стандартний роздільник шляху
console.log("Resolve -- " + path.resolve(__dirname, './test', 'second.html'))           //об'єднує всі вказані частини шляху в 1 абсолютний шлях із обов'язковим вказанням роздільникив каталогів