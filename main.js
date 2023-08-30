let playerHp, playerAttack, playerDefense;
let npcHp, npcAttack, npcDefense;
let playerLevel = 20; // 玩家初始等級
let npcLevel = 1; // NPC初始等級
let lastAttacker = null;
let lastPlayerHp = 0;
let lastNpcHp = 0;
let hpGemAmount = 0;
let attackGemAmount = 0;
let defenseGemAmount = 0;
const maxGemAmount = 100; // 最多寶石數量
const hpGemValue = 600;
const attackGemValue = 400;
const defenseGemValue = 200;

function updateStats() {
  // 玩家角色的選擇和數值計算
  const playerCamp = document.getElementById("player-camp").value;
  playerLevel = parseInt(document.getElementById("player-level").value);

  // 計算差距和基值，根據選擇的陣營來獲取對應的數值
  let playerHpBase,
    playerAttackBase,
    playerDefenseBase,
    playerHpGap,
    playerAttackGap,
    playerDefenseGap;

  if (playerCamp === "哥德法") {
    playerHpBase = 5000;
    playerAttackBase = 4000;
    playerDefenseBase = 2250;
    playerHpGap = 100;
    playerAttackGap = 80;
    playerDefenseGap = 45;
  } else if (playerCamp === "佛列羅") {
    playerHpBase = 4000;
    playerAttackBase = 4750;
    playerDefenseBase = 2000;
    playerHpGap = 80;
    playerAttackGap = 95;
    playerDefenseGap = 40;
  } else if (playerCamp === "明治") {
    playerHpBase = 4500;
    playerAttackBase = 4000;
    playerDefenseBase = 2500;
    playerHpGap = 90;
    playerAttackGap = 80;
    playerDefenseGap = 50;
  }

  // 計算血量、攻擊力和防禦力
  playerHp = playerLevel * playerHpGap + playerHpBase + hpGemAmount * hpGemValue;
  playerAttack = playerLevel * playerAttackGap + playerAttackBase + attackGemAmount * attackGemValue;
  playerDefense = playerLevel * playerDefenseGap + playerDefenseBase + defenseGemAmount * defenseGemValue;

  // 更新顯示玩家角色屬性
  document.getElementById("displayLevel").innerText = playerLevel;
  document.getElementById("displayHP").innerText = playerHp;
  document.getElementById("displayAttack").innerText = playerAttack;
  document.getElementById("displayDefense").innerText = playerDefense;

  // NPC的選擇和數值計算
  const npcCamp = document.getElementById("npc-camp").value;
  const npcName = document.getElementById("npc-name").value;

  // npcLevel = parseInt(document.getElementById("npc-level").value);

  // 計算差距和基值，根據選擇的陣營來獲取對應的數值
  let npcHpBase,
    npcAttackBase,
    npcDefenseBase,
    npcHpGap,
    npcAttackGap,
    npcDefenseGap;

  if (npcCamp === "哥德法") {
    npcHpBase = 5000;
    npcAttackBase = 4000;
    npcDefenseBase = 2250;
    npcHpGap = 100;
    npcAttackGap = 80;
    npcDefenseGap = 45;
  } else if (npcCamp === "佛列羅") {
    npcHpBase = 4000;
    npcAttackBase = 4750;
    npcDefenseBase = 2000;
    npcHpGap = 80;
    npcAttackGap = 95;
    npcDefenseGap = 40;
  } else if (npcCamp === "明治") {
    npcHpBase = 4500;
    npcAttackBase = 4000;
    npcDefenseBase = 2500;
    npcHpGap = 90;
    npcAttackGap = 80;
    npcDefenseGap = 50;
  }

  if (npcName === "樂霏霏" || npcName === "迪克多") {
    npcHpBase = 5000;
    npcAttackBase = 4000;
    npcDefenseBase = 2250;
    npcHpGap = 100;
    npcAttackGap = 80;
    npcDefenseGap = 45;
    npcLevel = 30;
  } else if (npcName === "極力連" || npcName === "多力士") {
    npcHpBase = 4000;
    npcAttackBase = 4750;
    npcDefenseBase = 2000;
    npcHpGap = 80;
    npcAttackGap = 95;
    npcDefenseGap = 40;
    npcLevel = 30;
  } else if (npcName === "琳達特" || npcName === "馬克西姆") {
    npcHpBase = 4500;
    npcAttackBase = 4000;
    npcDefenseBase = 2500;
    npcHpGap = 90;
    npcAttackGap = 80;
    npcDefenseGap = 50;
    npcLevel = 30;
  } else if (npcName === "卡吉爾") {
    npcHpBase = 5000;
    npcAttackBase = 4000;
    npcDefenseBase = 2250;
    npcHpGap = 100;
    npcAttackGap = 80;
    npcDefenseGap = 45;
    npcLevel = 60;
  } else if (npcName === "雀巢") {
    npcHpBase = 4000;
    npcAttackBase = 4750;
    npcDefenseBase = 2000;
    npcHpGap = 80;
    npcAttackGap = 95;
    npcDefenseGap = 40;
    npcLevel = 60;
  } else if (npcName === "馬赫斯") {
    npcHpBase = 4500;
    npcAttackBase = 4000;
    npcDefenseBase = 2500;
    npcHpGap = 90;
    npcAttackGap = 80;
    npcDefenseGap = 50;
    npcLevel = 60;
  } else if (npcName === "禾雪" || npcName === "凱峇里") {
    npcLevel = 60;
  } else if (npcName === "巴爾里·卡勒保") {
    npcLevel = 90;
  }

  // 計算血量、攻擊力和防禦力
  npcHp = npcLevel * npcHpGap + npcHpBase;
  npcAttack = npcLevel * npcAttackGap + npcAttackBase;
  npcDefense = npcLevel * npcDefenseGap + npcDefenseBase;

  // 更新顯示NPC屬性
  document.getElementById("npc-displayLevel").innerText = npcLevel;
  document.getElementById("npc-displayHP").innerText = npcHp;
  document.getElementById("npc-displayAttack").innerText = npcAttack;
  document.getElementById("npc-displayDefense").innerText = npcDefense;

  updateStory();
}

function updateStory() {
  var npcName = document.getElementById("npc-name").value;
  var npcNickname = "請選擇NPC";
  var npcStory = null;
  switch (npcName) {
    case "樂霏霏":
      npcNickname = "樂霏霏：草藥師、自然使者";
      npcStory =
        "樂霏霏隸屬於哥德法陣營，出生神秘家族的她卻生性天真、有點呆呆的。家中的支援使她得以成為這個世界上為數不多的草藥師，可以製作神奇的藥水。而她也因為特殊的地位成為了可以操縱自然之力的自然使者。";
      break;
    case "迪克多":
      npcNickname = "迪克多：建築師、機關師、大地使者";
      npcStory =
        "迪克多隸屬於哥德法陣營，天性善良、隨和。天賦異稟的他是這個陣營中技術力最高的建築師，除了可以徒手畫設計圖，手巧的他還可以結合材料做出一些機關。而他也因為特殊的天賦成為了可以操縱大地之力的大地使者。";
      break;
    case "卡吉爾":
      npcNickname = "卡吉爾：哥德法公爵、自然與大地之神";
      npcStory =
        "卡吉爾隸屬於哥德法陣營，性格理性、忠心。他是陣營的大公爵，目前暫代某位管轄著哥德法。而他也是掌控著自然與大地兩種神力的神。";
      break;
    case "極力連":
      npcNickname = "極力連：劍客、祕寶商人、金屬使者";
      npcStory =
        "極力連隸屬於佛列羅陣營，因為被排擠而性情暴虐。她是這個世界上首屈一指的劍客，時常四處冒險，同時經營一家神秘的商店來賣她四處搜括的物品。而她也因為特殊的戰力成為了可以操縱金屬之力的金屬使者。";
      break;
    case "多力士":
      npcNickname = "多力士：詛咒師、幽暗";
      npcStory =
        "多力士隸屬於佛列羅陣營，由於年輕時的陰影與情傷而沉默寡言。他是稀世罕見的詛咒師，可以無視距離詛咒別人，他的詛咒甚至可以對神發揮作用。而神秘的他也可以操縱幽暗之力。";
      break;
    case "雀巢":
      npcNickname = "雀巢：佛列羅首領、金屬之神";
      npcStory =
        "雀巢是佛列羅陣營的首領，性格殘暴、隨興。他的強大讓他掌握著佛列羅的所有，是一位獨裁者。而他也是掌控著金屬神力的神。";
      break;
    case "琳達特":
      npcNickname = "琳達特：明治女王、風之使者";
      npcStory =
        "琳達特是明治的女王，出生王族的她高貴而冷漠。而她也因為特殊的身分成為了可以操縱風之力的風之使者。";
      break;
    case "馬克西姆":
      npcNickname = "馬克西姆：幻術師、考古學家、光之使者";
      npcStory = "馬克西姆隸屬於明治陣營，從小聰明無比但有點太多話了。他是異常強大的幻術師，可以在任何情況下逃脫或是糊弄敵人。而他也因為特殊的智慧成為了可以操縱光明之力的光之使者。";
      break;
    case "馬赫斯":
      npcNickname = "馬赫斯：明治祭司、風與光之神";
      npcStory = "馬赫斯是明治陣營的祭司，性格深思熟慮，總是留了許多後路。因為明治陣營的制度不能握有權力而作為祭司存在著，緊急時刻可以統帥軍隊。而他也是掌控著風與光兩種神力的神。";
      break;
    case "凱峇里":
      npcNickname = "凱峇里：命運之神";
      npcStory = "凱峇里是中立的命運之神，性格樂於助人。";
      break;
    case "禾雪":
      npcNickname = "禾雪：花與密語之神";
      npcStory = "禾雪是掌握花與密語兩種神力的中立神靈，超級愛八卦也超級愛聽八卦。";
      break;
    case "巴爾里·卡勒保":
      npcNickname = "巴爾里：冒險者";
      npcStory = "巴爾里是一個神祕的冒險者，號稱征服了一切。";
      break;
  }
  document.getElementById("npc-displayNickname").innerText = npcNickname;
  document.getElementById("npc-displayStory").innerText = npcStory;
}

function attack(attacker) {
  let attackerHp, attackerAttack, attackerDefense;
  let defenderHp, defenderAttack, defenderDefense;
  let defenderDisplayHP, attackerDisplayAttack, attackerDisplayDefense;

  if (attacker === "player") {
    attackerHp = playerHp;
    attackerAttack = playerAttack;
    attackerDefense = playerDefense;
    defenderHp = npcHp;
    defenderAttack = npcAttack;
    defenderDefense = npcDefense;
    defenderDisplayHP = document.getElementById("npc-displayHP");
    attackerDisplayAttack = document.getElementById("displayAttack");
    attackerDisplayDefense = document.getElementById("displayDefense");
  } else if (attacker === "npc") {
    attackerHp = npcHp;
    attackerAttack = npcAttack;
    attackerDefense = npcDefense;
    defenderHp = playerHp;
    defenderAttack = playerAttack;
    defenderDefense = playerDefense;
    defenderDisplayHP = document.getElementById("displayHP");
    attackerDisplayAttack = document.getElementById("npc-displayAttack");
    attackerDisplayDefense = document.getElementById("npc-displayDefense");
  } else {
    return;
  }

  // 計算傷害
  let damage = attackerAttack - defenderDefense;

  // 若傷害為負值，則設為0，避免回復血量
  damage = Math.max(damage, 0);

  // 更新血量
  defenderHp -= damage;

  // 更新顯示血量
  defenderDisplayHP.innerText = defenderHp;

  // 將攻擊者和受攻擊者的屬性更新回原來的變數中
  if (attacker === "player") {
    npcHp = defenderHp;
  } else if (attacker === "npc") {
    playerHp = defenderHp;
  }

  // 判斷勝負
  if (playerHp <= 0) {
    alert("NPC獲勝！");
    resetGame(false);
  } else if (npcHp <= 0) {
    alert("玩家獲勝！");
    //checkPlayerLevelUp();
    resetGame(true);
  }
}

function checkPlayerLevelUp() {
  // 計算玩家等級差距
  const levelDifference = playerLevel - npcLevel;

  //alert(levelDifference);
  // 根據等級差距提升玩家等級
  if (levelDifference <= -20) {
    playerLevel += 18;
  } else if (levelDifference > -20 && levelDifference <= -15) {
    playerLevel += 15;
  } else if (levelDifference > -15 && levelDifference <= -10) {
    playerLevel += 10;
  } else if (levelDifference > -10 && levelDifference <= -5) {
    playerLevel += 8;
  } else if (levelDifference > -5 && levelDifference <= 10) {
    playerLevel += 6;
  } else if (levelDifference > 10 && levelDifference <= 20) {
    playerLevel += 2;
  } else if (levelDifference > 20) {
    playerLevel += 1;
  }
}

function resetGame(isPlayerWin) {
  if (!isPlayerWin) {
    // NPC獲勝，重設雙方血量
    updateStats();
    playerHp = playerLevel * playerHpGap + playerHpBase;
    npcHp = npcLevel * npcHpGap + npcHpBase;
  } else {
    updateStats();
    checkPlayerLevelUp();
  }

  // 更新顯示玩家角色和NPC的屬性
  document.getElementById("player-level").value = playerLevel;
  document.getElementById("npc-level").value = npcLevel;
  document.getElementById("npc-displayHP").value = npcHp;

  updateStats();
}

document.getElementById("attack-btn").addEventListener("click", function () {
  const winner = document.querySelector('input[name="winner"]:checked').value;
  performAttack(winner);
});
// 取消攻擊的按鈕事件處理
document.getElementById("cancel-btn").addEventListener("click", function () {
  cancelAttack();
});

function performAttack(attacker) {
  if (attacker === "player") {
    attack("player");
  } else if (attacker === "npc") {
    attack("npc");
  }
}

// 增加寶石數量的函數
function incrementGem(type) {
  if (type === "hp" && hpGemAmount < maxGemAmount) {
    hpGemAmount++;
    document.getElementById("hp-gem-amount").textContent = hpGemAmount;
    playerHp += hpGemValue; // 增加玩家血量
    document.getElementById("displayHP").textContent = playerHp; // 更新顯示的玩家血量
  } else if (type === "attack" && attackGemAmount < maxGemAmount) {
    attackGemAmount++;
    document.getElementById("attack-gem-amount").textContent = attackGemAmount;
    playerAttack += attackGemValue; // 增加玩家攻擊數值
    document.getElementById("displayAttack").textContent = playerAttack; // 更新顯示的玩家攻擊數值
  } else if (type === "defense" && defenseGemAmount < maxGemAmount) {
    defenseGemAmount++;
    document.getElementById("defense-gem-amount").textContent =
      defenseGemAmount;
    playerDefense += defenseGemValue; // 增加玩家防禦數值
    document.getElementById("displayDefense").textContent = playerDefense; // 更新顯示的玩家防禦數值
  }
  // updateStats();
}

// 減少寶石數量的函數
function decrementGem(type) {
  if (type === "hp" && hpGemAmount > 0) {
    hpGemAmount--;
    document.getElementById("hp-gem-amount").textContent = hpGemAmount;
    playerHp -= hpGemValue; // 減少玩家血量
    document.getElementById("displayHP").textContent = playerHp; // 更新顯示的玩家血量
  } else if (type === "attack" && attackGemAmount > 0) {
    attackGemAmount--;
    document.getElementById("attack-gem-amount").textContent = attackGemAmount;
    playerAttack -= attackGemValue; // 減少玩家攻擊數值
    document.getElementById("displayAttack").textContent = playerAttack; // 更新顯示的玩家攻擊數值
  } else if (type === "defense" && defenseGemAmount > 0) {
    defenseGemAmount--;
    document.getElementById("defense-gem-amount").textContent =
      defenseGemAmount;
    playerDefense -= defenseGemValue; // 減少玩家防禦數值
    document.getElementById("displayDefense").textContent = playerDefense; // 更新顯示的玩家防禦數值
  }
  // updateStats();

}

// 添加事件監聽，當選擇陣營或等級改變時，即時更新數值
document.getElementById("player-camp").addEventListener("input", updateStats);
document.getElementById("player-level").addEventListener("input", updateStats);
document.getElementById("npc-camp").addEventListener("input", updateStats);
document.getElementById("npc-level").addEventListener("input", updateStats);

// 初始載入時計算一次數值
updateStats();
