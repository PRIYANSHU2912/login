let a = document.querySelector('.submain1');
let b = document.querySelector('.submain2');
let c = document.querySelector('.container');
let d = document.querySelector('.foot');
let close = document.querySelector('#close');
a.addEventListener('click', function () {
    c.classList.add("active2");
    d.classList.add("active");
});
close.addEventListener('click', function () {
    c.classList.remove("active2");
    d.classList.remove("active");
});
b.addEventListener('click',function(){
   b.textContent = "Followed";
});