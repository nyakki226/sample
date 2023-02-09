function start() {
    window.location.href = 'nazo1.html';
}

function back_home() {
    window.location.href = '../../../toppage.html';
}

function back_gamepage() {
    window.location.href = 'gamepage.html';
}

function No1File() {
    let key = document.getElementById("ans_word").value;
    let key2 = document.getElementById("ans_word_2").value;

    if (key == "4" && (key2 == "0" || key2 == "00")) {
        window.location.href = 'q2.html';
    } else {
        alert("もう一度考えてみよう!");
    }
    
}

function No2File() {
    let key = document.getElementById("ans_word_3").value;

    if (key == "かだい") {
        window.location.href = 'Q3.html';
    } else {
        alert("もう一度考えてみよう!");
    }
    
}

function No3File() {
    let key = document.getElementById("ans_word_4").value;

    if (key == "きつね") {
        window.location.href = 'que4.html';
    } else {
        alert("もう一度考えてみよう!");
    }
    
}

function extra_stage() {
    alert("???「なにか忘れてないか?」");
    window.location.href = 'extra.html';
}

function goal() {
    let key = document.getElementById("name").value;

    if (key == "ニャッキ" || key == "にゃっき" || key == "怪盗ニャッキ") {
        window.location.href = 'page/game/nazotoki_game/extra_goal.html';
    }
    
}

// カウント用フラグ
let cnt = 0;

function fox() {
    cnt += 1; 
    if (cnt == 1){
        alert("コン");
    } else if (cnt == 2){
        alert("コンコン");
    } else if (cnt == 3){
        alert("・・・");
    } else if (cnt == 4){
        alert("もしかして気づいてる？");
    } else if (cnt == 5){
        alert("見つかっちゃった...");
        window.location.href = 'page/game/nazotoki_game/true.html';
    }
}

//ヒント
function Tips(k_num) {
    if (k_num == "1") {
        alert("虎は10で馬は30");
    } else if (k_num == "2") {
        alert("なにかの表にも見える...縦5つのマスで一つのセットだったような？");
    } else if (k_num == "3") {
        alert("やり方が違うだけでさっきのナゾと似ているような...");
    } else if (k_num == "4") {
        alert("田村侑也の自己紹介データが戻ってきていないのに...?");
    } else if (k_num == "5") {
        alert("自己紹介データを修正することが出来るのは...?");
    }  else if (k_num == "6") {
        alert("じゃあ最初にみたあの自己紹介ページは...?");
    }  else if (k_num == "7") {
        alert("どこかの場所に文字が入力できるところとボタンが隠れているような...");
    }  else if (k_num == "8") {
        alert("最初のページまで戻ってゆっくり考えてみるのも大切");
    }
}