window.onload = function() {
    main();
}




function main() {
    let laugh = document.querySelectorAll(".anim.anim-laugh");
    let wow  = document.querySelectorAll(".anim.anim-wow");
    let wink  = document.querySelectorAll(".anim.anim-wink");
    let love  = document.querySelectorAll(".anim.anim-love");
    let kiss  = document.querySelectorAll(".anim.anim-kiss");

    laugh.forEach(element => createLaughEmoji(element));
    wow.forEach(element => createWowEmoji(element));
    wink.forEach(element => createWinkEmoji(element));
    love.forEach(element => createLoveEmoji(element));
    kiss.forEach(element => createKissEmoji(element));
}

function createLaughEmoji(element) {
    var circle = createElementWithClass("span", "circle");
    var semiCircle = createElementWithClass("span", "semi-circle");
    var foursquare = createElementWithClass("span", "foursquare");
    var closeEyeLeft = createElementWithClass("span", "eye-left");
    var closeEyeRight = createElementWithClass("span", "eye-right");
    var eyeDiv = createElementWithClass("span", "eye-div");

    eyeDiv.append(closeEyeLeft);
    eyeDiv.append(closeEyeRight);
    semiCircle.append(foursquare);

    element.append(circle);
    element.append(semiCircle);
    element.append(eyeDiv);
}

function createWowEmoji(element) {
    var circle = createElementWithClass("span", "circle");
    var semiCircle = createElementWithClass("span", "semi-circle");
    var foursquare = createElementWithClass("span", "foursquare");
    var closeEyeLeft = createElementWithClass("span", "eye-left");
    var closeEyeRight = createElementWithClass("span", "eye-right");
    var eyeDiv = createElementWithClass("span", "eye-div");

    eyeDiv.append(closeEyeLeft);
    eyeDiv.append(closeEyeRight);
    semiCircle.append(foursquare);

    element.append(circle);
    element.append(semiCircle);
    element.append(eyeDiv);
}

function createWinkEmoji(element) {
    var circle = createElementWithClass("span", "circle");
    var semiCircle = createElementWithClass("span", "semi-circle");
    var foursquare = createElementWithClass("span", "foursquare");
    var closeEyeLeft = createElementWithClass("span", "eye-left");
    var closeEyeRight = createElementWithClass("span", "eye-right");
    var eyeDiv = createElementWithClass("span", "eye-div");

    eyeDiv.append(closeEyeLeft);
    eyeDiv.append(closeEyeRight);
    semiCircle.append(foursquare);

    element.append(circle);
    element.append(semiCircle);
    element.append(eyeDiv);
}

function createLoveEmoji(element) {
    var circle = createElementWithClass("span", "circle");
    var semiCircle = createElementWithClass("span", "semi-circle");
    var closeEyeLeft = createElementWithClass("span", "heart");
    var closeEyeRight = createElementWithClass("span", "heart");
    var eyeDiv = createElementWithClass("span", "eye-div");

    eyeDiv.append(closeEyeLeft);
    eyeDiv.append(closeEyeRight);

    element.append(circle);
    element.append(semiCircle);
    element.append(eyeDiv);
}

function createKissEmoji(element) {
    var circle = createElementWithClass("span", "circle");
    var semiCircle = createElementWithClass("span", "lips");
    var closeEyeLeft = createElementWithClass("span", "eye-left");
    var closeEyeRight = createElementWithClass("span", "eye-right");
    var eyeDiv = createElementWithClass("span", "eye-div");
    var heart = createElementWithClass("span", "heart");

    eyeDiv.append(closeEyeLeft);
    eyeDiv.append(closeEyeRight);

    element.append(circle);
    element.append(semiCircle);
    element.append(eyeDiv);
    element.append(heart);
}


function createElementWithClass(tag, className) {
    var element = document.createElement(tag);
    element.classList.add(className);

    return element;
}