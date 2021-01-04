let target = document.querySelector('#dynamic');
let stringArr = ['Learn to HTML', 'Learn to CSS', 
'Learn to Javascriot', 'Learn to Python'];

//문자열 인덱스 랜덤하게 뽑고, 소수점 이하 버리기
let selectString = stringArr[Math.floor(Math.random(stringArr) * stringArr.length)];

//뽑은 문자열 문자배열로 분리
let selectStringArr = selectString.split('');
console.log(selectStringArr);

function randomString() {
    let stringArr = ['Learn to HTML', 'Learn to CSS', 
                    'Learn to Javascriot', 'Learn to Python'];
    let selectString = stringArr[Math.floor(Math.random(stringArr) * stringArr.length)];
    let selectStringArr = selectString.split('');

    return selectStringArr;
}

//타이핑 리셋
function resetTyping(){
    target.textContent = '';
    dynamic(randomString());
}

//한 글자씩 텍스트 출력 함수 
function dynamic(randomArr){
    if(randomArr.length>0){
    target.textContent += randomArr.shift();
    setTimeout(function(){
        dynamic(randomArr);
      }, 80);
    } else {
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}//toggle: 보이면 보이지 않게, 보이지 않으면 보이게
setInterval(blink, 500);