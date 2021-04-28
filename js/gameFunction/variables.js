let app;
let keys = {};
let speed = 8;
let volumn = 10;
let ticker_count = 0;
let foschan_ticker = 0;
let isEnd = false;
var startTime;
var timeDistance = 0;
var windowHeight = window.screen.height;
var windowWidth = window.screen.width;
var appHeight;
var appWidth;

let modifier = 0;

var cheatMode = false;

//database
var inventory = [
  {
    name: "Chonlasit coin",
    path: "/images/token/chonlasit_coin.png",
    desc: "New digital crypto! 1 coin can exchange discount to buy lotteries for 1 THB.",
    effect: 0,
    type: "token",
    rarity: "R",
    in_stock: 1000
  },
  {
    name: "Boss coin",
    path: "/images/token/boss_coin.png",
    desc: "Use for play gacha.",
    effect: 0,
    type: "token",
    rarity: "",
    in_stock: 1000
  },
  {
    name: "normal ticket",
    path: "/images/token/normal_ticket.png",
    desc: "Use for play game.",
    effect: 0,
    type: "token",
    rarity: "",
    in_stock: 1
  },
  {
    name: "premiem ticket",
    path: "/images/token/premiem_ticket.png",
    desc: "Use for play game, will get x5 Boss coins than normal ticket.",
    effect: 0,
    type: "token",
    rarity: "",
    in_stock: 1
  },
  {
    name: "beach",
    path: "/images/bg/beach.png",
    desc: "She sells sea shells by the sea shore. Score boost 1% per LV. (max at 5%)",
    effect: 0.01,
    type: "bg",
    rarity: "SR",
    in_stock: 1
  },
  {
    name: "Foschan",
    path: "/images/char/foschan2.png",
    desc: "First and ONLY mascot in Pianoforte. She will always cheer you on title screen.",
    effect: 0,
    type: "char",
    rarity: "",
    in_stock: 1
  },
  {
    name: "hill",
    path: "/images/bg/hill.png",
    desc: "Beautiful hills, don't mistake spell e instead of i, ok?",
    effect: 0,
    type: "bg",
    rarity: "",
    in_stock: 1
  }
];

var equiping = [{
  type: "bg",
  details: inventory[6]
},
{
  type: "char",
  details: inventory[5]
}];

let song;

var songDict = [
  {
    name: "POWER SPOT",
    path: "sounds/POWER_SPOT!!.ogg",
    time: "3:57",
  },
  {
    name: "MIRACLE WAVE",
    path: "sounds/MIRACLE_WAVE.ogg",
    time: "4:12",
  },
  {
    name: "VIVID WORLD",
    path: "sounds/VIVID WORLD (short ver.).mp3",
    time: "1:38",
  },
  {
    name: "START DASH",
    path: "sounds/Start-Dash!!.ogg",
    time: "4:17",
  },
  {
    name: "ANGELIC ANGEL",
    path: "sounds/Angelic_Angel.mp3",
    time: "1:49",
  },
  {
    name: "PURE PHRASE",
    path: "sounds/09._PURE_PHRASE.ogg",
    time: "5:10",
  },
];

let comboText;
let scoreText;
let playing_accuracyText;
let hitTextS;
let hitTextD;
let hitTextK;
let hitTextL;

let foschan1;
let foschan2;

let textureSButton;
let textureDButton;
let textureKButton;
let textureLButton;
let texture_pressedSButton;
let texture_pressedDButton;
let texture_pressedKButton;
let texture_pressedLButton;
let SButton;
let DButton;
let KButton;
let LButton;
let noteS;
let noteD;
let noteK;
let noteL;

let noteS_start;
let noteS_sign;
let noteS_body;
let noteS_end;
let noteS_sign_end;
let noteD_start;
let noteD_sign;
let noteD_body;
let noteD_end;
let noteD_sign_end;
let noteK_start;
let noteK_sign;
let noteK_body;
let noteK_end;
let noteK_sign_end;
let noteL_start;
let noteL_sign;
let noteL_body;
let noteL_end;
let noteL_sign_end;
let noteType = [0, 0, 0, 0];
let noteAvailiable = [false, false, false, false];
let performanceGraph;
let perfromanceGraphProp = {
  x: 0,
  y: 0,
  height: 0,
  width: 0,
};

let combo = 0;
let score = 0;
let maxCombo = 0;
let note_num = 0;
let performancePlay = [];
let perfectTap = 0;
let goodTap = 0;
let badTap = 0;
let missTap = 0;
let accuracy = 0;
let accuracy_score = 0;
let candleArray = [];

let rainbowGradient = [
  "#b00b0b",
  "#cf601d",
  "#eef30a",
  "#0c7e39",
  "#1ea2b0",
  "#0404bd",
  "#6f136c",
];

let top_layer;
let ground_layer;
let smallFontSize;
let normalFontSize;
let bigFontSize;

if (windowHeight >= 1000 && windowWidth >= 500) {
  appHeight = 800;
  appWidth = 400;
  smallFontSize = 20;
  normalFontSize = 35;
  bigFontSize = 50;
} else if (windowHeight >= 1000 && windowWidth < 500) {
  appHeight = windowWidth * 1.6;
  appWidth = windowWidth * 0.8;
  smallFontSize = 10;
  normalFontSize = 15;
  bigFontSize = 20;
} else if (windowHeight < 1000 && windowWidth >= 500) {
  appHeight = windowHeight * 0.8;
  appWidth = windowHeight * 0.4;
  smallFontSize = 10;
  normalFontSize = 15;
  bigFontSize = 20;
} else {
  appHeight = windowHeight * 0.8;
  appWidth = windowWidth * 0.8;
  smallFontSize = 10;
  normalFontSize = 15;
  bigFontSize = 20;
}

var appX = windowWidth / 2 - appWidth / 2;
var appY = windowHeight / 2 - appHeight / 2;

perfromanceGraphProp.x = appX + appWidth * 0.2;
perfromanceGraphProp.y = appY + appHeight * 0.5;
perfromanceGraphProp.width = appWidth * 0.7;
perfromanceGraphProp.height = appHeight * 0.2;


const Headerstyle = new PIXI.TextStyle({
  fontSize: bigFontSize,
  fontWeight: "bolder",
});

const Menustyle = new PIXI.TextStyle({
  fontSize: normalFontSize,
  fontStyle: "italic",
});

const Menustyle2 = new PIXI.TextStyle({
  fontSize: normalFontSize,
});

const Detailstyle = new PIXI.TextStyle({
  fontSize: smallFontSize,
});

const Dangerstyle = new PIXI.TextStyle({
  fontSize: normalFontSize,
  fill: "#b00b0b",
});

