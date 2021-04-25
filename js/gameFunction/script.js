function keysDown(e) {
  keys[e.keyCode] = true;
}

function keysUp(e) {
  keys[e.keyCode] = false;
}

function isIntersect(a, b) {
  let aBox = a.getBounds();
  let bBox = b.getBounds();
  return (
    aBox.x + aBox.width > bBox.x &&
    aBox.x < bBox.x + bBox.width &&
    aBox.y + aBox.height > bBox.y &&
    aBox.y < bBox.y + bBox.height
  );
}

function isPerfect(a, b) {
  let aBox = a.getBounds();
  let bBox = b.getBounds();
  return (
    aBox.y + aBox.height > bBox.y &&
    aBox.y < bBox.y + bBox.height &&
    aBox.y + aBox.height >= bBox.y + bBox.height * 0.7 &&
    aBox.y + aBox.height <= bBox.y + bBox.height * 1.3
  );
}

function perfect(text) {
  performancePlay.push(3);
  perfectTap += 1;
  note_num += 1;
  text.text = "PERFECT";
  text.visible = true;
  text.style.fontSize = 10;
  accuracy_score += 100;
  accuracy = (accuracy_score / note_num).toFixed(2);
  playing_accuracyText.text = accuracy + "%";
}

function good(text) {
  performancePlay.push(2);
  goodTap += 1;
  note_num += 1;
  text.text = "GOOD";
  text.visible = true;
  text.style.fontSize = 10;
  accuracy_score += 70;
  accuracy = (accuracy_score / note_num).toFixed(2);
  playing_accuracyText.text = accuracy + "%";
}

function bad(text) {
  performancePlay.push(1);
  badTap += 1;
  note_num += 1;
  text.text = "BAD";
  text.visible = true;
  text.style.fontSize = 10;
  accuracy_score += 0;
  accuracy = (accuracy_score / note_num).toFixed(2);
  playing_accuracyText.text = accuracy + "%";
}

function miss(text) {
  performancePlay.push(0);
  missTap += 1;
  note_num += 1;
  text.text = "MISS";
  text.visible = true;
  text.style.fontSize = 10;
  accuracy = (accuracy_score / note_num).toFixed(2);
  playing_accuracyText.text = accuracy + "%";
}

function tickHitOrMiss(text) {
  if (text.visible === true) {
    bringToFront(text);
    if (text.style.fontSize < 30) {
      text.style.fontSize += 1;
    } else {
      text.visible = false;
    }
  }
}

function bringToFront(layer) {
  playScreen.removeChild(layer);
  playScreen.addChild(layer);
}

function adjObj(obj, parent, x, y, isbutton, anchor) {
  obj.anchor.set(anchor);
  obj.x = x;
  obj.y = y;
  obj.buttonMode = isbutton;
  obj.interactive = isbutton;
  parent.addChild(obj);
}

function adjSprite(obj, parent, x, y, width, height, isbutton, anchor) {
  obj.anchor.set(anchor);
  obj.x = x;
  obj.y = y;
  obj.width = width;
  obj.height = height;
  obj.buttonMode = isbutton;
  obj.interactive = isbutton;
  parent.addChild(obj);
}

function changePage() {
  titleScreen.visible = false;
  songSelectScreen.visible = false;
  playScreen.visible = false;
  resultScreen.visible = false;
}

function interactiveSwitch(screen, switchs) {
    screen.children.forEach(childObj => {
        childObj.interactive = switchs;
    });
}
