function counter_app(){
    count++;
    document.querySelector(".display").textContent = count;

}

function un_counter_app(){
    count--;
    document.querySelector(".display").textContent = count;

}

function  reset(){
    count = 0;
    document.querySelector(".display").textContent = count;

}


var count = 0;