function myFunction(){

let input = document.querySelector("#myInput");
let filter = input.value.toUpperCase(); //Запоминает всё что пишем в Инпут
let ul = document.querySelector("#myUL");
let li = ul.querySelectorAll("li");

console.log(input);
console.log(filter);
console.log(ul);
console.log(li);

    for (let i = 0; i < li.length; i++){
        let a = li[i].querySelectorAll("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            console.log(a.innerHTML); //Если ничего не написано выдаёт все значения, если пишешь буквы filter запомниает их и выдаёт все слова где есть это буква
        } else {
            li[i].style.display = "none";
        }
    }
}
