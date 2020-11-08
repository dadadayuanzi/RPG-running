var human = document.getElementsByClassName('human')[0];
var h_x;
var h_y;
var h_w = human.offsetWidth;
var h_h = human.offsetHeight;
var num = 0;
var speed = 8;
var KeyC;

// 入口函数
function init () {
    document.addEventListener("keydown",keyDownHandle,false);
    document.addEventListener("keyup",keyUpHandle,false);
    setInterval(move,16)
}
function rightMove() {
        human.style.backgroundPositionY = -h_h*2 + 'px'
        human.style.left = h_x + speed + 'px';
}
function leftMove() {
        human.style.backgroundPositionY = -h_h*1 + 'px'
        human.style.left = h_x - speed + 'px';
}
function upMove() {
        human.style.backgroundPositionY = -h_h*3 + 'px'
        human.style.top = h_y - speed + 'px';
}
function downMove() {
        human.style.backgroundPositionY = 0 + 'px'
        human.style.top =  h_y + speed + 'px';
}

// 自身的走动
function turn() {
    num++;
    if (num > 3) {
        num = 0; 
    }
    human.style.backgroundPositionX = -h_w*num + 'px';

}

var e = Event || window.event;
function keyDownHandle (e){
    turn()
    speed--;
    if(!speed) {
        speed = 8
    }
    h_x = human.offsetLeft;
    h_y = human.offsetTop;
    KeyC = e.keyCode;
}

function keyUpHandle (e) {
    num = 0;
    human.style.backgroundPositionX = -num*h_w+"px";
}

function move(){
    if (KeyC == 39){
        rightMove();
    }else if(KeyC == 38) {
        upMove();
    }else if(KeyC == 37) {
        leftMove();
    }else if(KeyC == 40){
        downMove();
    }
}

init()