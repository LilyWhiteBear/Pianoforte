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

function destroyPage(screen) {
  screen.children.forEach((childObj) => {
    childObj.destroy();
    screen.removeChild(childObj);
  });
}

function interactiveSwitch(screen, switchs) {
  screen.children.forEach((childObj) => {
    childObj.interactive = switchs;
  });
}

function clearPlayScreen() {
  if (noteType[0] === 1 || noteType[0] === 2) {
    playScreen.removeChild(noteS);
  }
  if (noteType[1] === 1 || noteType[1] === 2) {
    playScreen.removeChild(noteD);
  }
  if (noteType[2] === 1 || noteType[2] === 2) {
    playScreen.removeChild(noteK);
  }
  if (noteType[3] === 1 || noteType[3] === 2) {
    playScreen.removeChild(noteL);
  }
  noteType = [0, 0, 0, 0];
  noteAvailiable = [false, false, false, false];
}

function getTokenValue(token, param) {
  for (i in inventory) {
    if (inventory[i].name === token) return inventory[i][param];
  }
  return 0;
}

function setTokenValue(token, param, update_value) {
  for (i in inventory) {
    if (inventory[i].name === token) {
      inventory[i][param] = update_value;
      return;
    }
  }
}

function updateInventoryScreen() {
  let inventory_backButton = new PIXI.Text("BACK", Menustyle);
  adjObj(inventory_backButton, inventoryScreen, appX, appY, true);
  inventory_backButton.on("pointerdown", function () {
    inventoryScreen.visible = false;
    titleScreen.visible = true;
    destroyPage(inventoryScreen);
  });

  let currentItem = 0;
  inventory.forEach((item) => {
    if (item.in_stock > 0) {
      let itemImage = new PIXI.Sprite.from(item.path);
      adjSprite(
        itemImage,
        inventoryScreen,
        appX + appWidth * 0.1 + appWidth * 0.5 * (currentItem % 2),
        appY + appHeight * 0.1 + appHeight * 0.2 * Math.floor(currentItem / 2),
        appWidth * 0.3,
        appHeight * 0.15,
        true
      );
      itemImage.on("pointerdown", function () {
        interactiveSwitch(inventoryScreen, false);
        let descWindow = new PIXI.Container();
        inventoryScreen.addChild(descWindow);

        let descBorder = new PIXI.Graphics();
        descBorder.beginFill(0x000000);
        descBorder.drawRect(
          appX + appWidth * 0.095,
          appY + appHeight * 0.245,
          appWidth * 0.81,
          appHeight * 0.46
        );
        descWindow.addChild(descBorder);

        let descBG = new PIXI.Graphics();
        descBG.beginFill(0x74ccf4);
        descBG.drawRect(
          appX + appWidth * 0.1,
          appY + appHeight * 0.25,
          appWidth * 0.8,
          appHeight * 0.45
        );
        descWindow.addChild(descBG);

        let descClose = new PIXI.Text("X", Menustyle2);
        adjObj(
          descClose,
          descWindow,
          appX + appWidth * 0.84,
          appY + appHeight * 0.25,
          true
        );
        descClose.on("pointerdown", function () {
          destroyPage(descWindow);
          inventoryScreen.removeChild(descWindow);
          interactiveSwitch(inventoryScreen, true);
        });

        let descName = new PIXI.Text(item.name, Menustyle2);
        adjObj(
          descName,
          descWindow,
          appX + appWidth * 0.5,
          appY + appHeight * 0.3,
          false,
          0.5
        );

        let descText = new PIXI.Text(item.desc, {
          dropShadowAngle: 0.5,
          fontFamily: "Courier New",
          fontSize: normalFontSize,
          wordWrap: true,
          wordWrapWidth: appWidth * 0.7,
        });
        adjObj(
          descText,
          descWindow,
          appX + appWidth * 0.15,
          appY + appHeight * 0.35,
          false
        );

        let itemType = item.type;

        if (itemType === "bg") {
          let useButton = new PIXI.Text("USE", Menustyle2);
          adjObj(
            useButton,
            descWindow,
            appX + appWidth * 0.5,
            appY + appHeight * 0.65,
            true,
            0.5
          );

          if (equiping[0].details.name === item.name) {
            useButton.text = "USED";
            useButton.interactive = false;
          }

          useButton.on("pointerdown", function () {
            if (itemType === "bg") {
              equiping[0].details = item;
              let textureBG = new PIXI.Texture.from(item.path);
              leftBG.texture = textureBG;
              rightBG.texture = textureBG;
              useButton.text = "USED";
              useButton.interactive = false;
            }
          });
        }
      });

      let itemValue = new PIXI.Text(item.in_stock, Menustyle2);
      adjObj(
        itemValue,
        inventoryScreen,
        appX + appWidth * 0.25 + appWidth * 0.5 * (currentItem % 2),
        appY +
          appHeight * 0.275 +
          appHeight * 0.2 * Math.floor(currentItem / 2),
        false,
        0.5
      );

      currentItem++;
    }
  });
}
