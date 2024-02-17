// Adobe font 指定
(function(d) {
var config = {
    kitId: 'xvo8afm',
    scriptTimeout: 3000,
    async: true
},
h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

(function (){
    sessionStorage.clear();
    sessionStorage.setItem('coin', '0');
    $("#selected_rock").addClass('hidden_item');
    $("#selected_paper").addClass('hidden_item');
    $("#selected_scissors").addClass('hidden_item');
})();

// セッションにコインの枚数を格納する
function SetCoinNumber(winFlg){
    let coinNumber = Number(sessionStorage.getItem('coin'));

    // 勝った場合
    if (winFlg == 1) {
        sessionStorage.setItem('coin', String(coinNumber + 1));
    }
    // 負けた場合
    else if (winFlg == 2) {
        if (coinNumber != 0) {
            sessionStorage.setItem('coin', String(coinNumber - 1));
        }
    }
}

// コインを画面に表示する
function DisplayCoins(){
    // コイン枚数表示
    let coinNumber = sessionStorage.getItem('coin');
    if (coinNumber != null) {
        $("#coin_number").html(coinNumber + ' COINS');
    }

    // コイン表示
    $("#cell01").addClass('hidden_item');
    $("#cell02").addClass('hidden_item');
    $("#cell03").addClass('hidden_item');
    $("#cell04").addClass('hidden_item');
    $("#cell05").addClass('hidden_item');
    $("#cell06").addClass('hidden_item');
    $("#cell07").addClass('hidden_item');
    $("#cell08").addClass('hidden_item');
    $("#cell09").addClass('hidden_item');
    $("#cell10").addClass('hidden_item');
    $("#cell11").addClass('hidden_item');
    $("#cell12").addClass('hidden_item');
    $("#cell13").addClass('hidden_item');
    $("#cell14").addClass('hidden_item');
    $("#cell15").addClass('hidden_item');

    if (Number(coinNumber) == 1) {
        $("#cell01").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 2) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 3) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 4) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 5) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 6) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 7) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
        $("#cell07").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 8) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
        $("#cell07").removeClass('hidden_item');
        $("#cell08").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 9) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
        $("#cell07").removeClass('hidden_item');
        $("#cell08").removeClass('hidden_item');
        $("#cell09").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 10) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
        $("#cell07").removeClass('hidden_item');
        $("#cell08").removeClass('hidden_item');
        $("#cell09").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 11) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
        $("#cell07").removeClass('hidden_item');
        $("#cell08").removeClass('hidden_item');
        $("#cell09").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 12) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
        $("#cell07").removeClass('hidden_item');
        $("#cell08").removeClass('hidden_item');
        $("#cell09").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
        $("#cell12").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 13) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
        $("#cell07").removeClass('hidden_item');
        $("#cell08").removeClass('hidden_item');
        $("#cell09").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
        $("#cell12").removeClass('hidden_item');
        $("#cell13").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 14) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
        $("#cell07").removeClass('hidden_item');
        $("#cell08").removeClass('hidden_item');
        $("#cell09").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
        $("#cell12").removeClass('hidden_item');
        $("#cell13").removeClass('hidden_item');
        $("#cell14").removeClass('hidden_item');
    }
    else if (Number(coinNumber) == 15) {
        $("#cell01").removeClass('hidden_item');
        $("#cell02").removeClass('hidden_item');
        $("#cell03").removeClass('hidden_item');
        $("#cell04").removeClass('hidden_item');
        $("#cell05").removeClass('hidden_item');
        $("#cell06").removeClass('hidden_item');
        $("#cell07").removeClass('hidden_item');
        $("#cell08").removeClass('hidden_item');
        $("#cell09").removeClass('hidden_item');
        $("#cell10").removeClass('hidden_item');
        $("#cell11").removeClass('hidden_item');
        $("#cell12").removeClass('hidden_item');
        $("#cell13").removeClass('hidden_item');
        $("#cell14").removeClass('hidden_item');
        $("#cell15").removeClass('hidden_item');
    }
}

// 岩カード選択
function rockCardClick() {
    // 選択マーク表示
    $("#selected_rock").removeClass('hidden_item');
    $("#selected_paper").addClass('hidden_item');
    $("#selected_scissors").addClass('hidden_item');

    let num = Math.ceil(Math.random() * 3);
    let winFlg;

    if (num === 1) {
        $("#opponent_card").html('ROCK');
        $("#judgment").html('DRAW');
    }
    else if (num === 2) {
        $("#opponent_card").html('SISSORS');
        $("#judgment").html('VICTORY');
        winFlg = 1;
        SetCoinNumber(winFlg);
    }
    else {
        $("#opponent_card").html('PAPER');
        $("#judgment").html('DEFEAT');
        winFlg = 2;
        SetCoinNumber(winFlg);
    }
    DisplayCoins();
}

// 紙カード選択
function paperCardClick(){
    // 選択マーク表示
    $("#selected_rock").addClass('hidden_item');
    $("#selected_paper").removeClass('hidden_item');
    $("#selected_scissors").addClass('hidden_item');

    let num = Math.ceil(Math.random() * 3);
    let winFlg;

    if (num === 1) {
        $("#opponent_card").html('ROCK');
        $("#judgment").html('VICTORY');
        winFlg = 1;
        SetCoinNumber(winFlg);
    }
    else if (num === 2) {
        $("#opponent_card").html('SISSORS');
        $("#judgment").html('DEFEAT');
    }
    else {
        $("#opponent_card").html('PAPER');
        $("#judgment").html('DRAW');
        winFlg = 2;
        SetCoinNumber(winFlg);
    }
    DisplayCoins();
}

// ハサミカード選択
function sissorsCardClick(){
    // 選択マーク表示
    $("#selected_rock").addClass('hidden_item');
    $("#selected_paper").addClass('hidden_item');
    $("#selected_scissors").removeClass('hidden_item');

    let num = Math.ceil(Math.random() * 3);
    let winFlg;

    if (num === 1) {
        $("#opponent_card").html('ROCK');
        $("#judgment").html('DEFEAT');
        winFlg = 2;
        SetCoinNumber(winFlg);
    }
    else if (num === 2) {
        $("#opponent_card").html('SISSORS');
        $("#judgment").html('DRAW');
    }
    else {
        $("#opponent_card").html('PAPER');
        $("#judgment").html('VICTORY');
        winFlg = 1;
        SetCoinNumber(winFlg);
    }
    DisplayCoins();
}