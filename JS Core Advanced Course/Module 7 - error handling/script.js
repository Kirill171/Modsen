// Напишите функцию, которая принимает массив в качестве параметра и выдает пользовательскую ошибку, если массив пуст.

function isEmpty(massive) {
    try{
        if(massive.length === 0){
            throw new Error('Массив не должен быть пустым!');
        } else {
            console.log(`Массив подходит условию. Массив: ${massive}.`);
        }
    } catch(e){
        console.log(`Массив пустой. ${e.message}`);
    } finally{
        console.log('Я необязательный, и я вывожусь не в зависимости от наличия ошибки в try.'); // отобразится после каждого вызова функции isEmty();
    }
}

isEmpty([1, 2, 3, 4, 5]); // Массив подходит условию. Массив: 1,2,3,4,5.
isEmpty([-1, 2, -3, 4, -5]); // Массив подходит условию. Массив: -1,2,-3,4,-5.
isEmpty([]); // Массив пустой. Массив не должен быть пустым!