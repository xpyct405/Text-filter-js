let input = document.querySelector("#myInput");
let ul = document.querySelector("#myUL");
let li = ul.querySelectorAll("li");

function myFunction(){

let filter = input.value.toUpperCase(); //Запоминает всё что пишем в input
// console.log(filter);

    for (let i = 0; i < li.length; i++){
        let a = li[i].querySelectorAll("a")[0];
        // console.log(a.innerHTML); // выдаёт все значения городов
        
        if (a.innerHTML.toUpperCase().indexOf(filter) >= 0) {
            li[i].style.display = "";
            console.log(a.innerHTML); // выдаёт все значения городов в которых есть буква введеная в input
            console.log(a.innerHTML.toUpperCase().indexOf(filter)); // индекс буквы в слове
            // console.log(a.innerHTML); //Если ничего не написано выдаёт все значения, если пишешь буквы filter запомниает их и выдаёт все слова где есть это буква
            
        } else {
            li[i].style.display = "none";
        }
    }
}
