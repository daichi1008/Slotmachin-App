// 練習問題
// 数字の表示
// const nowTime = document.getElementById(`nowTime`);
// const nowTime2 = document.getElementById(`nowTime2`);
// const nowTime3 = document.getElementById(`nowTime3`);

// let sec1 = -1;
// let sec2 = -1;
// let sec3 = -1


// let count1;
// let count2;
// let count3;
// nowTime.textContent = `0`;
// nowTime2.textContent = `0`;
// nowTime3.textContent = `0`;

// // スタートボタン
// const startTimer = document.getElementById(`startTimer`)

// startTimer.addEventListener(`click`, function () {
//     clearInterval(count1);
//     clearInterval(count2);
//     clearInterval(count3);
//     setTime1.disabled = false;
//     setTime2.disabled = false;
//     setTime3.disabled = false;
//     function Timer() {
//         sec1 += 1;
//         nowTime.textContent = `${sec1}`
//         if (sec1 === 9) {
//             sec1 = -1
//         }
//     };

//     count1 = setInterval(Timer, 100);

//     function Timer2() {
//         sec2 += 1;
//         nowTime2.textContent = `${sec2}`
//         if (sec2 === 9) {
//             sec2 = -1
//         }
//     };

//     count2 = setInterval(Timer2, 100);

//     function Timer3() {
//         sec3 += 1;
//         nowTime3.textContent = `${sec3}`
//         if (sec3 === 9) {
//             sec3 = -1
//         }
//     };
//     count3 = setInterval(Timer3, 100);
// });

// // スロットを止める
// const setTime1 = document.getElementById(`setTime1`);
// const setTime2 = document.getElementById(`setTime2`);
// const setTime3 = document.getElementById(`setTime3`);

// setTime1.addEventListener(`click`, function () {
//     clearInterval(count1);
//     setTime1.disabled = true;
//     if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
//         if (sec1 === sec2 && sec3 === sec1) {
//             alert(`成功`)
//         } else {
//             alert(`再挑戦`)
//         };
//     };
// });
// setTime2.addEventListener(`click`, function () {
//     clearInterval(count2);
//     setTime2.disabled = true;
//     if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
//         if (sec1 === sec2 && sec3 === sec1) {
//             alert(`成功`)
//         } else {
//             alert(`再挑戦`)
//         };
//     };
// });
// setTime3.addEventListener(`click`, function () {
//     clearInterval(count3);
//     setTime3.disabled = true;
//     if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
//         if (sec1 === sec2 && sec3 === sec1) {
//             alert(`成功`)
//         } else {
//             alert(`再挑戦`)
//         };
//     };
// });

// チャレンジ問題

const nowTime = document.getElementById(`nowTime`);
const nowTime2 = document.getElementById(`nowTime2`);
const nowTime3 = document.getElementById(`nowTime3`);
const nowTime4 = document.getElementById(`nowTime4`);
const nowTime5 = document.getElementById(`nowTime5`);
const nowTime6 = document.getElementById(`nowTime6`);
const nowTime7 = document.getElementById(`nowTime7`);
const nowTime8 = document.getElementById(`nowTime8`);
const nowTime9 = document.getElementById(`nowTime9`);
let sec1 = -1;
let sec2 = -1;
let sec3 = -1;
let sec4 = 8;
let sec5 = 8;
let sec6 = 8;
let sec7 = 0;
let sec8 = 0;
let sec9 = 0;

let count1;
let count2;
let count3;
nowTime.textContent = `0`;
nowTime2.textContent = `0`;
nowTime3.textContent = `0`;
nowTime4.textContent = `9`;
nowTime5.textContent = `9`;
nowTime6.textContent = `9`;
nowTime7.textContent = `1`;
nowTime8.textContent = `1`;
nowTime9.textContent = `1`;



// スタートボタン
const startTimer = document.getElementById(`startTimer`)

startTimer.addEventListener(`click`, function () {
    clearInterval(count1);
    clearInterval(count2);
    clearInterval(count3);
    setTime1.disabled = false;
    setTime2.disabled = false;
    setTime3.disabled = false;
    function Timer() {
        sec1 += 1;
        sec4 += 1;
        sec7 += 1;
        nowTime.textContent = `${sec1}`
        nowTime4.textContent = `${sec4}`
        nowTime7.textContent = `${sec7}`
        if (sec1 === 9) {
            sec1 = -1
        } else if (sec4 === 9) {
            sec4 = -1
        } else if (sec7 === 9) {
            sec7 = -1
        }
    };

    count1 = setInterval(Timer, 100);

    function Timer2() {
        sec2 += 1;
        sec5 += 1;
        sec8 += 1;
        nowTime2.textContent = `${sec2}`
        nowTime5.textContent = `${sec5}`
        nowTime8.textContent = `${sec8}`
        if (sec2 === 9) {
            sec2 = -1
        } else if (sec5 === 9) {
            sec5 = -1
        } else if (sec8 === 9) {
            sec8 = -1
        }
    };

    count2 = setInterval(Timer2, 100);

    function Timer3() {
        sec3 += 1;
        sec6 += 1;
        sec9 += 1;
        nowTime3.textContent = `${sec3}`
        nowTime6.textContent = `${sec6}`
        nowTime9.textContent = `${sec9}`
        if (sec3 === 9) {
            sec3 = -1
        } else if (sec6 === 9) {
            sec6 = -1
        } else if (sec9 === 9) {
            sec9 = -1
        }
    }
    count3 = setInterval(Timer3, 100);
});

// スロットを止める
const setTime1 = document.getElementById(`setTime1`);
const setTime2 = document.getElementById(`setTime2`);
const setTime3 = document.getElementById(`setTime3`);

setTime1.addEventListener(`click`, function () {
    clearInterval(count1);
    setTime1.disabled = true;
    if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
        if (sec1 === sec2 && sec3 === sec1) {
            alert(`成功`)
        } else {
            alert(`再挑戦`)
        };
    };
});
setTime2.addEventListener(`click`, function () {
    clearInterval(count2);
    setTime2.disabled = true;
    if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
        if (sec1 === sec2 && sec3 === sec1) {
            alert(`成功`)
        } else {
            alert(`再挑戦`)
        };
    };
});
setTime3.addEventListener(`click`, function () {
    clearInterval(count3);
    setTime3.disabled = true;
    if (setTime1.disabled && setTime2.disabled && setTime3.disabled) {
        if (sec1 === sec2 && sec3 === sec1) {
            alert(`成功`)
        } else {
            alert(`再挑戦`)
        };
    };
});