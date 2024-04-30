// selections
let img = document.querySelector('.img-con img');
let pre = document.querySelector("#pre");
let next = document.querySelector("#next");
const myimageLists = ['images/bg-1.jpg', 'images/bg-2.jpg', 'images/bg-3.jpg'];
let len = myimageLists.length;
let count = 0;

next.addEventListener('click', function(){
    count++;
    if(len <= count){
        count = 0;
        img.src = myimageLists[count];
    }
    else{
        img.src = myimageLists[count];
    }
})
pre.addEventListener('click', function(){
    count--;
    if(count < 0){
        count = 0;
        img.src = myimageLists[count];
    }
    else{
        img.src = myimageLists[count];
    }
})