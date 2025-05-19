const questions = [
    {
        text: "我們第一次見面在哪兒？",
        comment: "先來個簡單的",
        options: ["A. 陽明山", "B. 華山史努比", "C. 爵士酒吧", "D. 怪奇物語展覽"],
        correct: 2,
        picture: "https://img1.pixhost.to/images/5745/598433944_pxl_20240810_133501672-mp.jpg",
        correctFeedback: {
            message: "賓果🥳這題根本不用想",
            image: "https://img1.pixhost.to/images/5750/598498887_pxl_20250314_150823106-mp.jpg"
        },
        wrongFeedback: {
            message: "錯！不可能的ㄅ",
            image: "https://img1.pixhost.to/images/5750/598499221_beauty_20241214162744.jpg"
        }
    },
    {
        text: "100天時我們去哪裡吃晚餐？",
        comment: "好吃還想再吃ㄎㄎ",
        options: ["A. 韓國餐酒食堂", "B. UNCLE SHAWN燒肉", "C. 柒息地居酒屋", "D. 鐵F鐵板燒"],
        correct: 0,
        picture: "https://img1.pixhost.to/images/5745/598436411_pxl_20240613_135442899-mp.jpg",
        correctFeedback: {
            message: "迷有錯~！",
            image: "https://img1.pixhost.to/images/5770/598759910_pxl_20240825_092827987-mp.jpg"
        },
        wrongFeedback: {
            message: "答錯哩！",
            image: "https://img1.pixhost.to/images/5770/598760108_pxl_20240614_132628172-mp.jpg"
        }
    },
    {
        text: "以下哪個語言我沒有學過？",
        comment: "看尼有沒有在記🤔",
        options: ["A. 韓語", "B. 泰語", "C. 德語", "D. 法語"],
        correct: 2,
        picture: "https://img1.pixhost.to/images/5745/598438422_pxl_20240909_005733910-mp.jpg",
        correctFeedback: {
            message: "對🥳 是個包杯",
            image: "https://img1.pixhost.to/images/5770/598760879_1726194302156.jpg"
        },
        wrongFeedback: {
            message: "錯！有人沒有記齁",
            image: "https://img1.pixhost.to/images/5770/598761001_pxl_20240909_022514617-mp.jpg"
        }
    },
    {
        text: "大學的時候我去中國哪裡當交換學生？",
        comment: "這題沒問題的八",
        options: ["A. 哈爾濱", "B. 杭州", "C. 廣州", "D. 深圳"],
        correct: 2,
        picture: "https://img1.pixhost.to/images/5746/598440138_pxl_20240322_142352950-mp.jpg",
        correctFeedback: {
            message: "答對拉~ 輕輕鬆鬆八",
            image: "https://img1.pixhost.to/images/5770/598761736_pxl_20241201_135816175-mp-2.jpg"
        },
        wrongFeedback: {
            message: "錯惹~要確定內",
            image: "https://img1.pixhost.to/images/5770/598762253_pxl_20240309_032716372-mp.jpg"
        }
    },
    {
        text: "在日本吃到超好吃的壽喜燒在哪呢？",
        comment: "黑毛和牛豪讚🥰",
        options: ["A. 上野", "B. 新宿", "C. 澀谷", "D. 池袋"],
        correct: 1,
        picture: "https://img1.pixhost.to/images/5746/598441375_pxl_20240915_041115776_exported_583_1726381520791.jpg",
        correctFeedback: {
            message: "賓果~ 好吃到流連忘返",
            image: "https://img1.pixhost.to/images/5770/598762807_pxl_20240914_111137328-mp.jpg"
        },
        wrongFeedback: {
            message: "錯！才不到一年就忘了ㄇ",
            image: "https://img1.pixhost.to/images/5770/598763188_pxl_20241110_052051033-mp.jpg"
        }
    },
    {
        text: "我在海洋迪士尼的髮箍蝴蝶結是什麼顏色？",
        comment: "和土豆一起買的髮箍~土豆~~",
        options: ["A. 紅色", "B. 粉紅色", "C. 紫色", "D. 銀色"],
        correct: 3,
        picture: "https://img1.pixhost.to/images/5746/598441879_pxl_20240910_052742741-mp.jpg",
        correctFeedback: {
            message: "迷有錯🥔 呱呱~",
            image: "https://img1.pixhost.to/images/5770/598763360_pxl_20240910_024513979-mp.jpg"
        },
        wrongFeedback: {
            message: "尼J個土豆！答錯！",
            image: "https://img1.pixhost.to/images/5770/598763358_pxl_20240910_114628127-mp.jpg"
        }
    },
    {
        text: "我在華山的白熊專賣店本來想買什麼但沒貨惹？",
        comment: "我的究被..🥹",
        options: ["A. 自信熊", "B. 趙哥熊", "C. 黑熊杯套", "D. 御守熊"],
        correct: 3,
        picture: "https://img1.pixhost.to/images/5746/598442627_pxl_20240227_104350710-mp.jpg",
        correctFeedback: {
            message: "答對哩! 揪被!!",
            image: "https://img1.pixhost.to/images/5771/598764870_pxl_20240720_083339492-mp.jpg"
        },
        wrongFeedback: {
            message: "錯哩 納尼?!",
            image: "https://img1.pixhost.to/images/5770/598764064_pxl_20241224_132536620-mp.jpg"
        }
    },
    {
        text: "月經來的話偶特別喜歡買什麼？",
        comment: "不可能會錯的八",
        options: ["A. 糯米香茶加粉粿", "B. 黑糖雪點奶茶", "C. 黑糖風味小農鮮奶", "D. 紅豆湯"],
        correct: 1,
        picture: "https://img1.pixhost.to/images/5746/598443053_pxl_20240615_072748475-mp.jpg",
        correctFeedback: {
            message: "迷錯~包杯也會買給我喝💕",
            image: "https://img1.pixhost.to/images/5771/598766224_pxl_20240831_072957028-mp.jpg"
        },
        wrongFeedback: {
            message: "錯! 都沒記得:(",
            image: "https://img1.pixhost.to/images/5771/598766153_pxl_20240910_092217877-mp-2.jpg"
        }
    },
    {
        text: "我們去美麗華搭摩天輪後去看什麼電影？",
        comment: "簡簡單單膝蓋答都答的對(?)",
        options: ["A. 海洋奇緣", "B. 神鬼戰士2", "C. 旺卡", "D. 沒看，回家洗洗睡"],
        correct: 0,
        picture: "https://img1.pixhost.to/images/5746/598443512_pxl_20241025_140620932-mp.jpg",
        correctFeedback: {
            message: "答對！最荒謬的一場電影🫠",
            image: "https://img1.pixhost.to/images/5771/598766599_pxl_20240323_062011863-mp.jpg"
        },
        wrongFeedback: {
            message: "錯! 需要銀杏惹嗎(?",
            image: "https://img1.pixhost.to/images/5774/598808935_beauty_20240831175400-2.jpg"
        }
    },
    {
        text: "有沒有想我👀？",
        comment: "請好好選歐🙂",
        options: ["A. 當然有!!!", "B. 好像有", "C. 還好ㄋㄟˋ", "D. 忘惹"],
        correct: 0,
        picture: "https://img1.pixhost.to/images/5746/598444259_pxl_20250301_063845428-mp.jpg",
        correctFeedback: {
            message: "ME TOOO! ㄎㄎ",
            image: "https://img1.pixhost.to/images/5771/598767053_1735964430128.jpg"
        },
        wrongFeedback: {
            message: "分數扣光光！😠",
            image: "https://img1.pixhost.to/images/5771/598767515_pxl_20241010_080058357-mp.jpg"
        }
    }
];

let current = 0;
let score = 0;

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");
const hint = document.getElementById("hint")
const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const pic = document.getElementById("pic")
const reward = document.getElementById("reward")
const scoreDisplay = document.getElementById("score");
const finalScore = document.getElementById("finalScore");
const resultSound = document.getElementById("resultSound");

const preloadImages = [
    "https://img1.pixhost.to/images/5722/598131926_chatgpt-image-2025330-11_37_44.png",

    "https://img1.pixhost.to/images/5745/598433944_pxl_20240810_133501672-mp.jpg",
    "https://img1.pixhost.to/images/5750/598498887_pxl_20250314_150823106-mp.jpg",
    "https://img1.pixhost.to/images/5750/598499221_beauty_20241214162744.jpg",

    "https://img1.pixhost.to/images/5745/598436411_pxl_20240613_135442899-mp.jpg",
    "https://img1.pixhost.to/images/5770/598759910_pxl_20240825_092827987-mp.jpg",
    "https://img1.pixhost.to/images/5770/598760108_pxl_20240614_132628172-mp.jpg",

    "https://img1.pixhost.to/images/5745/598438422_pxl_20240909_005733910-mp.jpg",
    "https://img1.pixhost.to/images/5770/598760879_1726194302156.jpg",
    "https://img1.pixhost.to/images/5770/598761001_pxl_20240909_022514617-mp.jpg",

    "https://img1.pixhost.to/images/5746/598440138_pxl_20240322_142352950-mp.jpg",
    "https://img1.pixhost.to/images/5770/598761736_pxl_20241201_135816175-mp-2.jpg",
    "https://img1.pixhost.to/images/5770/598762253_pxl_20240309_032716372-mp.jpg",

    "https://img1.pixhost.to/images/5746/598441375_pxl_20240915_041115776_exported_583_1726381520791.jpg",
    "https://img1.pixhost.to/images/5770/598762807_pxl_20240914_111137328-mp.jpg",
    "https://img1.pixhost.to/images/5770/598763188_pxl_20241110_052051033-mp.jpg",

    "https://img1.pixhost.to/images/5746/598441879_pxl_20240910_052742741-mp.jpg",
    "https://img1.pixhost.to/images/5770/598763360_pxl_20240910_024513979-mp.jpg",
    "https://img1.pixhost.to/images/5770/598763358_pxl_20240910_114628127-mp.jpg",

    "https://img1.pixhost.to/images/5746/598442627_pxl_20240227_104350710-mp.jpg",
    "https://img1.pixhost.to/images/5771/598764870_pxl_20240720_083339492-mp.jpg",
    "https://img1.pixhost.to/images/5770/598764064_pxl_20241224_132536620-mp.jpg",

    "https://img1.pixhost.to/images/5746/598443053_pxl_20240615_072748475-mp.jpg",
    "https://img1.pixhost.to/images/5771/598766224_pxl_20240831_072957028-mp.jpg",
    "https://img1.pixhost.to/images/5771/598766153_pxl_20240910_092217877-mp-2.jpg",

    "https://img1.pixhost.to/images/5746/598443512_pxl_20241025_140620932-mp.jpg",
    "https://img1.pixhost.to/images/5771/598766599_pxl_20240323_062011863-mp.jpg",
    "https://img1.pixhost.to/images/5774/598808935_beauty_20240831175400-2.jpg",

    "https://img1.pixhost.to/images/5746/598444259_pxl_20250301_063845428-mp.jpg",
    "https://img1.pixhost.to/images/5771/598767053_1735964430128.jpg",
    "https://img1.pixhost.to/images/5771/598767515_pxl_20241010_080058357-mp.jpg",

    "https://img1.pixhost.to/images/5746/598449612_-2025-05-14-223833.png",
    "https://img1.pixhost.to/images/5746/598452954_beauty_20240721162027.jpg",
    "https://img1.pixhost.to/images/5746/598453370_beauty_20240706114153.jpg",
    "https://img1.pixhost.to/images/5746/598453542_pxl_20240720_141047304-mp-2.jpg"
];

let loadedCount = 0;

function preloadAllImages(callback) {
    preloadImages.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loadedCount++;
            updateProgress();
            if (loadedCount === preloadImages.length) {
                setTimeout(callback, 300);
            }
        };
    });
}

function updateProgress() {
    const percent = (loadedCount / preloadImages.length) * 100;
    document.getElementById("progressBar").style.width = percent + "%";
    document.getElementById("heartIcon").style.left = `calc(${percent}% - 12px)`;
}

window.onload = function () {
    preloadAllImages(() => {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("startScreen").style.display = "block";
    });
};

function startGame() {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    showQuestion();
}

function showQuestion() {
    const q = questions[current];
    pic.innerHTML = `<img src=${q.picture}>`;
    hint.textContent = `${q.comment}`
    questionText.textContent = `第 ${current + 1} 題：${q.text}`;
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.className = "option-button"
        btn.onclick = () => handleAnswer(index);
        optionsDiv.appendChild(btn);
    });
}

function showPopup(isCorrect, isLastQuestion) {
    const q = questions[current];

    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popupTitle");
    const popupImage = document.getElementById("popupImage");
    const popupMessage = document.getElementById("popupMessage");

    if (isCorrect) {
        popupTitle.textContent = q.correctFeedback.message;
        popupImage.src = q.correctFeedback.image;
        resultSound.src = "sounds/mixkit-small-win-2020.wav"
    } else {
        popupTitle.textContent = q.wrongFeedback.message;
        popupImage.src = q.wrongFeedback.image;
        resultSound.src = "sounds/mixkit-losing-bleeps-2026.wav"
    }

    // 播放音效
    resultSound.currentTime = 0;
    resultSound.play();

    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";

    current++;
    if (current < questions.length) {
        quizScreen.style.display = "block";
        showQuestion();
    } else {
        showResult();
    }
}

function handleAnswer(selectedIndex) {
    const q = questions[current];
    const isCorrect = selectedIndex === q.correct;
    const isLastQuestion = current === questions.length - 1;

    if (isCorrect) {
        score += 10;
    } else {
        if (isLastQuestion) {
            score -= 90;
            if (score < 0) score = 0;
        }
    }

    quizScreen.style.display = "none";
    scoreDisplay.textContent = `目前得分：${score} 分`;

    showPopup(isCorrect, isLastQuestion);
}

function showResult() {
    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    let message = "";
    let imageUrl = "";
    let extraButton = "";

    if (score >= 90) {
        message = "🎉 通過拉~！ 我們假日來做壽喜燒吧！🎉";
        imageUrl = "https://img1.pixhost.to/images/5746/598449612_-2025-05-14-223833.png";
        resultSound.src = "sounds/mixkit-game-level-completed-2059.wav";
        extraButton = `
            <button class="cardButton" onclick="showLoveLetter()">
              💌 恭喜獲得神秘卡片
            </button>
        `;
    } else if (score >= 60) {
        message = "痾..恭喜獲得在耳邊聽我喊土豆獎勵 🥔";
        imageUrl = "https://img1.pixhost.to/images/5746/598452954_beauty_20240721162027.jpg";
        resultSound.src = "sounds/mixkit-horror-lose-2028.wav"
    } else if (score >= 40) {
        message = "尼！我要一直喊土豆給你聽 👀";
        imageUrl = "https://img1.pixhost.to/images/5746/598453370_beauty_20240706114153.jpg";
        resultSound.src = "sounds/mixkit-horror-lose-2028.wav"
    } else {
        message = "??? 我要在你耳邊唱甜蜜蜜 💀";
        imageUrl = "https://img1.pixhost.to/images/5746/598453542_pxl_20240720_141047304-mp-2.jpg";
        resultSound.src = "sounds/mixkit-horror-lose-2028.wav"
    }

    // 播放音效
    resultSound.currentTime = 0;
    resultSound.play();

    // 顯示結果
    finalScore.innerHTML = `
      <h3 class="final-score">總共得了 ${score} 分</h3>
      <h2>${message}</h2>
        ${extraButton}

    `;
    reward.innerHTML = `<img src=${imageUrl}>`

}

function showLoveLetter() {
    document.getElementById("loveLetterPopup").style.display = "block";
}

function closeLoveLetter() {
    document.getElementById("loveLetterPopup").style.display = "none";
}

// 預設只顯示首頁畫面
startScreen.style.display = "block";
