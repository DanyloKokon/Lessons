//console.log('Terminal module loaded');
//console.log(j);

// npm init — ініціалізує npm в проєкті і створює файл package.json
// npm install — встановлює всі залежності, перелічені в package.json
// npm list --depth=0 — виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
// npm install [package-name] — встановить пакет локально у папку node_modules
// npm uninstall [package-name] — видалить пакет, встановлений локально і оновить package.json
// npm start і npm test — запустить скрипт start або test, розташований в package.json


const nanoid = require('nanoid').nanoid;
var validator = require('validator');

validator.isEmail('foo@bar.com'); //=> true

console.log(validator.isEmail('foo@bar.com'));


console.log(nanoid());


