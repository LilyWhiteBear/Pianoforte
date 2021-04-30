function foschanLoop() {
    if (titleScreen.visible) {
        foschan_ticker += 1;
        if (foschan_ticker % 50 === 0) {
            if (foschan1.visible) {
                foschan1.visible = false;
                foschan2.visible = true;
            }
            else if (foschan2.visible) {
                foschan1.visible = true;
                foschan2.visible = false;
            }
        }
    }
}

function gameLoop() {

    ticker_count += 1;
    //generate note
    if (ticker_count % Math.floor(200 / speed) === 0 && ticker_count > 500 && !isEnd) {
        let rand = Math.floor(Math.random() * Math.floor(4));
        let type_rand = Math.floor(Math.random() * Math.floor(10));
        if (type_rand >= 1) {
            if (rand === 0 && noteType[0] === 0) {
                noteS = new PIXI.Graphics();
                noteS.beginFill(0xC70039);
                noteS.drawCircle(appX + appWidth * 0.125, appY + appHeight * -0.125, appWidth * 0.125);
                playScreen.addChild(noteS);
                noteType[0] = 1;
            }
            else if (rand === 1 && noteType[1] === 0) {
                noteD = new PIXI.Graphics();
                noteD.beginFill(0xC70039);
                noteD.drawCircle(appX + appWidth * 0.375, appY + appHeight * -0.125, appWidth * 0.125);
                playScreen.addChild(noteD);
                noteType[1] = 1;
            }
            else if (rand === 2 && noteType[2] === 0) {
                noteK = new PIXI.Graphics();
                noteK.beginFill(0xC70039);
                noteK.drawCircle(appX + appWidth * 0.625, appY + appHeight * -0.125, appWidth * 0.125);
                playScreen.addChild(noteK);
                noteType[2] = 1;
            }
            else if (rand === 3 && noteType[3] === 0) {
                noteL = new PIXI.Graphics();
                noteL.beginFill(0xC70039);
                noteL.drawCircle(appX + appWidth * 0.875, appY + appHeight * -0.125, appWidth * 0.125);
                playScreen.addChild(noteL);
                noteType[3] = 1;
            }
        }
        else {
            if (rand === 0 && noteType[0] === 0) {
                let long_rand = Math.floor(Math.random() * Math.floor(3)) + 2;
                noteS = new PIXI.Container();

                noteS_start = new PIXI.Graphics();
                noteS_start.beginFill(0x016e31);
                noteS_start.drawCircle(appX + appWidth * 0.125, appY + appHeight * -0.125, appWidth * 0.125);

                noteS_body = new PIXI.Graphics();
                noteS_body.beginFill(0x016e31);
                noteS_body.drawRect(appX, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.25, appHeight * 0.1 * long_rand);

                noteS_sign = new PIXI.Graphics();
                noteS_sign.beginFill(0xAAAAAA);
                noteS_sign.drawCircle(appX + appWidth * 0.125, appY + appHeight * -0.125, appWidth * 0.1);

                noteS_end = new PIXI.Graphics();
                noteS_end.beginFill(0x016e31);
                noteS_end.drawCircle(appX + appWidth * 0.125, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.125);

                noteS_sign_end = new PIXI.Graphics();
                noteS_sign_end.beginFill(0xAAAAAA);
                noteS_sign_end.drawCircle(appX + appWidth * 0.125, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.1);

                noteS.addChild(noteS_body);
                noteS.addChild(noteS_start);
                noteS.addChild(noteS_sign);
                noteS.addChild(noteS_end);
                noteS.addChild(noteS_sign_end);
                playScreen.addChild(noteS);
                noteType[0] = 2;
                noteAvailiable[0] = true;
            }
            else if (rand === 1 && noteType[1] === 0) {
                let long_rand = Math.floor(Math.random() * Math.floor(3)) + 2;
                noteD = new PIXI.Container();

                noteD_start = new PIXI.Graphics();
                noteD_start.beginFill(0x016e31);
                noteD_start.drawCircle(appX + appWidth * 0.375, appY + appHeight * -0.125, appWidth * 0.125);

                noteD_body = new PIXI.Graphics();
                noteD_body.beginFill(0x016e31);
                noteD_body.drawRect(appX + appWidth * 0.25, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.25, appHeight * 0.1 * long_rand);

                noteD_sign = new PIXI.Graphics();
                noteD_sign.beginFill(0xAAAAAA);
                noteD_sign.drawCircle(appX + appWidth * 0.375, appY + appHeight * -0.125, appWidth * 0.1);

                noteD_end = new PIXI.Graphics();
                noteD_end.beginFill(0x016e31);
                noteD_end.drawCircle(appX + appWidth * 0.375, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.125);

                noteD_sign_end = new PIXI.Graphics();
                noteD_sign_end.beginFill(0xAAAAAA);
                noteD_sign_end.drawCircle(appX + appWidth * 0.375, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.1);

                noteD.addChild(noteD_body);
                noteD.addChild(noteD_start);
                noteD.addChild(noteD_sign);
                noteD.addChild(noteD_end);
                noteD.addChild(noteD_sign_end);
                playScreen.addChild(noteD);
                noteType[1] = 2;
                noteAvailiable[1] = true;
            }
            else if (rand === 2 && noteType[2] === 0) {
                let long_rand = Math.floor(Math.random() * Math.floor(3)) + 2;
                noteK = new PIXI.Container();

                noteK_start = new PIXI.Graphics();
                noteK_start.beginFill(0x016e31);
                noteK_start.drawCircle(appX + appWidth * 0.625, appY + appHeight * -0.125, appWidth * 0.125);

                noteK_body = new PIXI.Graphics();
                noteK_body.beginFill(0x016e31);
                noteK_body.drawRect(appX + appWidth * 0.5, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.25, appHeight * 0.1 * long_rand);

                noteK_sign = new PIXI.Graphics();
                noteK_sign.beginFill(0xAAAAAA);
                noteK_sign.drawCircle(appX + appWidth * 0.625, appY + appHeight * -0.125, appWidth * 0.1);

                noteK_end = new PIXI.Graphics();
                noteK_end.beginFill(0x016e31);
                noteK_end.drawCircle(appX + appWidth * 0.625, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.125);

                noteK_sign_end = new PIXI.Graphics();
                noteK_sign_end.beginFill(0xAAAAAA);
                noteK_sign_end.drawCircle(appX + appWidth * 0.625, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.1);

                noteK.addChild(noteK_body);
                noteK.addChild(noteK_start);
                noteK.addChild(noteK_sign);
                noteK.addChild(noteK_end);
                noteK.addChild(noteK_sign_end);
                playScreen.addChild(noteK);
                noteType[2] = 2;
                noteAvailiable[2] = true;
            }
            else if (rand === 3 && noteType[3] === 0) {
                let long_rand = Math.floor(Math.random() * Math.floor(3)) + 2;
                noteL = new PIXI.Container();

                noteL_start = new PIXI.Graphics();
                noteL_start.beginFill(0x016e31);
                noteL_start.drawCircle(appX + appWidth * 0.875, appY + appHeight * -0.125, appWidth * 0.125);

                noteL_body = new PIXI.Graphics();
                noteL_body.beginFill(0x016e31);
                noteL_body.drawRect(appX + appWidth * 0.75, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.25, appHeight * 0.1 * long_rand);

                noteL_sign = new PIXI.Graphics();
                noteL_sign.beginFill(0xAAAAAA);
                noteL_sign.drawCircle(appX + appWidth * 0.875, appY + appHeight * -0.125, appWidth * 0.1);

                noteL_end = new PIXI.Graphics();
                noteL_end.beginFill(0x016e31);
                noteL_end.drawCircle(appX + appWidth * 0.875, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.125);

                noteL_sign_end = new PIXI.Graphics();
                noteL_sign_end.beginFill(0xAAAAAA);
                noteL_sign_end.drawCircle(appX + appWidth * 0.875, appY + (appHeight * -0.125) - (appHeight * 0.1 * long_rand), appWidth * 0.1);

                noteL.addChild(noteL_body);
                noteL.addChild(noteL_start);
                noteL.addChild(noteL_sign);
                noteL.addChild(noteL_end);
                noteL.addChild(noteL_sign_end);
                playScreen.addChild(noteL);
                noteType[3] = 2;
                noteAvailiable[3] = true;
            }
        }
        bringToFront(scoreText);
        bringToFront(comboText);
        bringToFront(playing_accuracyText);
        bringToFront(top_layer);
        bringToFront(ground_layer);
    }

    //move note
    for (let i = 0; i < 4; i++) {
        if (noteType[i] === 0 && cheatMode) {
            if (i === 0) keys["83"] = false;
            else if (i === 1) keys["68"] = false;
            else if (i === 2) keys["75"] = false;
            else if (i === 3) keys["76"] = false;
        }
        else if (noteType[i] === 1) {
            if (i === 0) {
                if (cheatMode && isPerfect(SButton, noteS)) {
                    keys["83"] = true;
                }
                if (noteS.y < appY + appHeight) noteS.y += Math.ceil(speed * (appHeight / 800));
                else {
                    combo = 0;
                    comboText.text = combo + " combos";
                    playScreen.removeChild(noteS);
                    noteType[0] = 0;
                    miss(hitTextS);
                }
            }
            else if (i === 1) {
                if (cheatMode && isPerfect(DButton, noteD)) {
                    keys["68"] = true;
                }
                if (noteD.y < appY + appHeight) noteD.y += Math.ceil(speed * (appHeight / 800));
                else {
                    combo = 0;
                    comboText.text = combo + " combos";
                    playScreen.removeChild(noteD);
                    noteType[1] = 0;
                    miss(hitTextD);
                }
            }
            else if (i === 2) {
                if (cheatMode && isPerfect(KButton, noteK)) {
                    keys["75"] = true;
                }
                if (noteK.y < appY + appHeight) noteK.y += Math.ceil(speed * (appHeight / 800));
                else {
                    combo = 0;
                    comboText.text = combo + " combos";
                    playScreen.removeChild(noteK);
                    noteType[2] = 0;
                    miss(hitTextK);
                }
            }
            else if (i === 3) {
                if (cheatMode && isPerfect(LButton, noteL)) {
                    keys["76"] = true;
                }
                if (noteL.y < appY + appHeight) noteL.y += Math.ceil(speed * (appHeight / 800));
                else {
                    combo = 0;
                    comboText.text = combo + " combos";
                    playScreen.removeChild(noteL);
                    noteType[3] = 0;
                    miss(hitTextL);
                }
            }
        }
        else if (noteType[i] === 2) {
            if (i === 0) {
                if (cheatMode && isPerfect(SButton, noteS_start)) {
                    keys["83"] = true;
                }
                else if (cheatMode && isPerfect(SButton, noteS_end)) {
                    keys["83"] = false;
                }
                else if (cheatMode && isIntersect(SButton, noteS_body) && !isPerfect(SButton, noteS_end)) {
                    keys["83"] = true;
                }
                if ((noteS.y > appY + appHeight && noteAvailiable[i] === true) ||
                    noteS.y > appY + appHeight + noteS.height && noteAvailiable[i] === false) {
                    combo = 0;
                    comboText.text = combo + " combos";
                    playScreen.removeChild(noteS);
                    noteType[0] = 0;
                    miss(hitTextS);
                }
                else {
                    noteS.y += Math.ceil(speed * (appHeight / 800));
                }
            }
            else if (i === 1) {
                if (cheatMode && isPerfect(DButton, noteD_start)) {
                    keys["68"] = true;
                }
                else if (cheatMode && isPerfect(DButton, noteD_end)) {
                    keys["68"] = false;
                }
                else if (cheatMode && isIntersect(DButton, noteD_body) && !isPerfect(DButton, noteD_end)) {
                    keys["68"] = true;
                }

                if ((noteD.y > appY + appHeight && noteAvailiable[i] === true) ||
                    noteD.y > appY + appHeight + noteD.height && noteAvailiable[i] === false) {
                    combo = 0;
                    comboText.text = combo + " combos";
                    playScreen.removeChild(noteD);
                    noteType[1] = 0;
                    miss(hitTextD);
                }
                else {
                    noteD.y += Math.ceil(speed * (appHeight / 800));
                }
            }
            else if (i === 2) {
                if (cheatMode && isPerfect(KButton, noteK_start)) {
                    keys["75"] = true;
                }
                else if (cheatMode && isPerfect(KButton, noteK_end)) {
                    keys["75"] = false;
                }
                else if (cheatMode && isIntersect(KButton, noteK_body) && !isPerfect(KButton, noteK_end)) {
                    keys["75"] = true;
                }
                if ((noteK.y > appY + appHeight && noteAvailiable[i] === true) ||
                    noteK.y > appY + appHeight + noteK.height && noteAvailiable[i] === false) {
                    combo = 0;
                    comboText.text = combo + " combos";
                    playScreen.removeChild(noteK);
                    noteType[2] = 0;
                    miss(hitTextK);
                }
                else {
                    noteK.y += Math.ceil(speed * (appHeight / 800));
                }
            }
            else if (i === 3) {
                if (cheatMode && isPerfect(LButton, noteL_start)) {
                    keys["76"] = true;
                }
                else if (cheatMode && isPerfect(LButton, noteL_end)) {
                    keys["76"] = false;
                }
                else if (cheatMode && isIntersect(LButton, noteL_body) && !isPerfect(LButton, noteL_end)) {
                    keys["76"] = true;
                }
                if ((noteL.y > appY + appHeight && noteAvailiable[i] === true) ||
                    noteL.y > appY + appHeight + noteL.height && noteAvailiable[i] === false) {
                    combo = 0;
                    comboText.text = combo + " combos";
                    playScreen.removeChild(noteL);
                    noteType[3] = 0;
                    miss(hitTextL);
                }
                else {
                    noteL.y += Math.ceil(speed * (appHeight / 800));
                }
            }
        }
    }

    //pressing or unpressing check
    if (keys["83"]) {
        SButton.texture = texture_pressedSButton;
        isScore(0, SButton, noteS, noteS_start, hitTextS);
    }
    if (keys["68"]) {
        DButton.texture = texture_pressedDButton;
        isScore(1, DButton, noteD, noteD_start, hitTextD);
    }
    if (keys["75"]) {
        KButton.texture = texture_pressedKButton;
        isScore(2, KButton, noteK, noteK_start, hitTextK);
    }
    if (keys["76"]) {
        LButton.texture = texture_pressedLButton;
        isScore(3, LButton, noteL, noteL_start, hitTextL);
    }
    if (!keys["83"]) {
        SButton.texture = textureSButton;
        isReleaseScore(0, SButton, noteS, noteS_end, hitTextS);
    }
    if (!keys["68"]) {
        DButton.texture = textureDButton;
        isReleaseScore(1, DButton, noteD, noteD_end, hitTextD);
    }
    if (!keys["75"]) {
        KButton.texture = textureKButton;
        isReleaseScore(2, KButton, noteK, noteK_end, hitTextK);
    }
    if (!keys["76"]) {
        LButton.texture = textureLButton;
        isReleaseScore(3, LButton, noteL, noteL_end, hitTextL);
    }

    tickHitOrMiss(hitTextS);
    tickHitOrMiss(hitTextD);
    tickHitOrMiss(hitTextK);
    tickHitOrMiss(hitTextL);
}

function isScore(channel, button, note, note_start, text) {
    if (noteType[channel] === 1 && isPerfect(button, note)) {
        combo += 1;
        if (combo > maxCombo) maxCombo = combo;
        score += (300 + combo * 5);
        comboText.text = combo + " combos";
        scoreText.text = score.toString();
        playScreen.removeChild(note);
        noteType[channel] = 0;
        perfect(text);
    }
    else if (noteType[channel] === 1 && isIntersect(button, note)) {
        combo += 1;
        if (combo > maxCombo) maxCombo = combo;
        score += (250 + combo * 5);
        comboText.text = combo + " combos";
        scoreText.text = score.toString();
        playScreen.removeChild(note);
        noteType[channel] = 0;
        good(text);
    }
    else if (noteType[channel] === 1 && note.y >= appWidth * 0.7) {
        combo = 0;
        comboText.text = "0 combos";
        playScreen.removeChild(note);
        noteType[channel] = 0;
        bad(text);
    }
    else if (noteType[channel] === 2 && isIntersect(button, note_start) && noteAvailiable[channel] === true) {
        combo += 1;
        if (combo > maxCombo) maxCombo = combo;
        score += (250 + combo * 5);
        comboText.text = combo + " combos";
        scoreText.text = score.toString();
        noteAvailiable[channel] = false;
        // good(text);
        perfect(text);
    }
    else if (noteType[channel] === 2 && !isIntersect(button, note_start) && noteAvailiable[channel] === true) {
        combo = 0;
        comboText.text = "0 combos";
        playScreen.removeChild(note);
        noteType[channel] = 0;
        noteAvailiable[channel] = false;
        bad(text);
    }
}

function isReleaseScore(channel, button, note, note_end, text) {
    if (noteType[channel] === 2) {
        if (!isIntersect(button, note_end) && noteAvailiable[channel] === false) {
            combo = 0;
            comboText.text = "0 combos";
            playScreen.removeChild(note);
            noteType[channel] = 0;
            bad(text);
        }
        else if (isPerfect(button, note_end) && noteAvailiable[channel] === false) {
            combo += 1;
            if (combo > maxCombo) maxCombo = combo;
            score += (600 + combo * 5);
            comboText.text = combo + " combos";
            scoreText.text = score.toString();
            playScreen.removeChild(note);
            noteType[channel] = 0;
            perfect(text);
        }
        else if (isIntersect(button, note_end) && noteAvailiable[channel] === false) {
            combo += 1;
            if (combo > maxCombo) maxCombo = combo;
            score += (500 + combo * 5);
            comboText.text = combo + " combos";
            scoreText.text = score.toString();
            playScreen.removeChild(note);
            noteType[channel] = 0;
            good(text);
        }
    }
}