
function kolobok(pers) {

let result = "";

switch (pers) {
  case "дедушка":
    result = "Я от дедушки ушёл";
    break;
  case "заяц":
    result = "Я от зайца ушёл";
    break;
  case "лиса":
    result = "Меня съели";
    break;
  default:
    result = "убежал";
}

return(result);
}

console.log(kolobok("заяц"));

function newYear(name){

    switch (name){
        case "Дед Мороз":
            result = `${name}! ${name}! ${name}!`;
            break;
        case "Снегурочка":
            result = `${name}! ${name}! ${name}!`;
            break;
        default:
            result = "мы таких не ждём";    
    }

    return(result);

}

console.log(newYear("Снегурочка"));