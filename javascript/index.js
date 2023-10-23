function updateTime() {

    let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]"
        );
    }
let greeceElement = document.querySelector("#greece");
if (greeceElement) {
    let greeceDateElement = greeceElement.querySelector(".date");
    let greeceTimeElemenet = greeceElement.querySelector(".time");
    let greeceTime = moment().tz("Europe/Athens");

    greeceDateElement.innerHTML = greeceTime.format("MMMM Do YYYY");
    greeceTimeElemenet.innerHTML = greeceTime.format("h:mm:ss [<small>]A[</small>]"
        );
    }
}
function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }



updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);