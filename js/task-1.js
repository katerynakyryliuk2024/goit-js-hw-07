const List = document.querySelector('#categories');
console.log(List);
const mainEl = document.querySelectorAll('.item');
console.log(mainEl);

const Calculateamout = (mainEl) => {
 const total = 0;

mainEl.forEach((num) => {
   
    total += num;
});
    return `number of categories: ${total}`;
}


console.log(Calculateamout());