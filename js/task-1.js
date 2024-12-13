const List = document.querySelector('#categories');

const mainEl = document.querySelectorAll('.item');


const Calculateamout = mainEl.length;
console.log(`Number of categories: ${Calculateamout}`);

[...List.children].forEach((el) => {
    console.log(el.firstElementChild.textContent);
    console.dir(el.lastElementChild.children.length);
});

