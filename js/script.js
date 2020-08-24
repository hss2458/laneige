
var index = 0, temp = 0;
var animate = false;
var slide = all('.slide-item'); //슬라이드가 여러 개라 올로 잡음
var slidePrev = one('.slide-prev');
var slideNext = one('.slide-next');
var slidePause = one('.slide-pause');
var slideAuto = one('.slide-auto');
// var pauseBtn = one('.slide-stop');
var length = slide.length;
var keyNum;
var interval;


//초기화면
auto();
init();
function init() {
    slide[index].style.left = "0%";
}

//자동재생
function auto() {
    slideAuto.style.cssText = "display: none;";
    slidePause.style.cssText = "display: block;";

    interval = setInterval(function() {
        next();
    }, 3000);
    console.log('dd');
}

//정지
function pause() {
    slidePause.style.cssText = "display: none;";
    slideAuto.style.cssText = "display: block;";
    clearInterval(interval);
}

//이전 버튼 구현
function prev() {
    if(animate) return; 
    animate = true;
    temp = index;
    setTimeout(function() {
        slide[temp].style.cssText = "left: 100%; transition: .4s;";
    }, 20);
    index--;
    index = index === -1 ? length -1 : index;
            // 조건문          참       :  거짓
    // if(index === -1) {
    //     index = length - 1;
    // }
    slide[index].style.cssText = "left: -100%;"
    
    setTimeout(function() {
        if(slide[index].offsetLeft < 0) {
            //왼쪽(-width px)에 있을 때만 0%(제자리)로 오게하라
            console.log(slide[index].offsetLeft);
            slide[index].style.cssText = "left: 0%; transition: .4s;";
            setTimeout(function() {
                animate = false;
            }, 400);
        }
    } , 5);
    console.log(index);
}

//다음 버튼 구현
function next() {
    if(animate) return;
    animate = true;
    temp = index; //index를 기록
    setTimeout(function() {
        slide[temp].style.cssText = "left: -100%; transition: .4s;";
                    //현재 보고 있는 슬라이드를 좌측으로 보내기
    }, 20); //0.02초 뒤에 실행되다 보니 index가 바로 1이 돼 버려서 temp에 담기
    index++;
    index = index % length;
    slide[index].style.cssText = "left: 100%;";
    // 다음에 올 슬라이드를 우측으로 보내놓는다 (즉시)! 즉시 보내고,

    setTimeout(function() {
        if(slide[index].offsetLeft > 0) { //마이너스나 양수로 바꾸기!!
            slide[index].style.cssText = "left: 0%; transition: .4s;";
            console.log(slide[index].offsetLeft);
            console.log(slide[index].offsetWidth);
        }
        setTimeout(function() {
            animate = false;
        }, 400);
    }, 5); // 0.005초 다음에 올 슬라이드를 보이는 화면으로 부드럽게(transition) 옮긴다.
    console.log(index);
}

//버튼과 함수를 연결
slidePrev.addEventListener('click', prev);
slideNext.addEventListener('click', next);
slideAuto.addEventListener('click', auto);
slidePause.addEventListener('click', pause);

function one(ele) {
    return document.querySelector(ele);
}
function all(ele) {
    return document.querySelectorAll(ele);
}