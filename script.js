// 1. Вам дан обьект, с ключами herbivores, predators, All animals. 
//    Заполните значение ключа All animals всеми животными.

// let obj = {
//     herbivores: ['Зебра', 'Слон', 'Лошадь', 'Корова', 'Олень'],
//     predators:  ['Лев', 'Тигр', 'Волк', 'Рысь', 'Ягуар'],
//     'All animals': ['Зебра', 'Слон', 'Лошадь', 'Корова', 'Олень', 'Лев', 'Тигр', 'Волк', 'Рысь', 'Ягуар'],
// }
// console.log(obj);


// 2. Вам дан обьект obj, напишите функцию которая удалит поля со 
//    значениями undefined и вывести в консоль обновленный обьект 


let obj = {
    id: 1,
    title: "tuna sandwich",
    subtitle: undefined,
    price: "20$",
    "new price": null,
    description: "tuna sandwich best sandwich in the world",
    "more info": undefined,
    categories: null
}

const deleteValue = (keys) => {
    let result = { ...keys };
    for (let key in result) {
     if (result[key] === undefined || result[key] === null) {
         delete result[key];
     }
    }
    return result;
 }
 
 console.log(deleteValue(obj));