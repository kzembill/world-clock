function updateTime() {

    let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM        Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]"
        );
    }
let greeceElement = document.querySelector("#greece");
if (greeceElement) {
    let greeceDateElement = greeceElement.querySelector(".date");
    let greeceTimeElemenet = greeceElement.querySelector(".time");
    let greeceTime = moment().tz("Europe/Athens");

    greeceDateElement.innerHTML = greeceTime.format("MMMM   Do YYYY");
    greeceTimeElemenet.innerHTML = greeceTime.format("h:mm:ss [<small>]A[</small>]"
        );
    }
}
updateTime();
setInterval(updateTime, 1000);