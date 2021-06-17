window.onload = function() {
    main();
}




function main() {
    var laugh = document.querySelectorAll(".anim.anim-laugh");
    var wow  = document.querySelectorAll(".anim.anim-wow");
    var wink  = document.querySelectorAll(".anim.anim-wink");
    var love  = document.querySelectorAll(".anim.anim-love");
    var kiss  = document.querySelectorAll(".anim.anim-kiss");

    laugh.forEach(function (element) { createLaughEmoji(element)});
    wow.forEach(function (element) { createWowEmoji(element)});
    wink.forEach(function (element) { createWinkEmoji(element)});
    love.forEach(function (element) { createLoveEmoji(element)});
    kiss.forEach(function (element) { createKissEmoji(element)});
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