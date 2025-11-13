//  Get Elment From Html
let btn = document.getElementById("btn");
let searchInput = document.getElementById("searchinput");
let row = document.getElementById("row");

// Event About Input And Button Find
searchInput.addEventListener("input", function () {
  weatherData(searchInput.value);
});
btn.addEventListener("click", function () {
  weatherData(searchInput.value);
});

// Array of api object
let days = [];
// This For Static Display Becouse We Dont Need Errors
weatherData("cairo");

//  Function Get Api And Display Data In Html
async function weatherData(city) {
  let response =
    await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2799c46c9d2d4edc98d124947250911&q=${city}&days=3&aqi=no&alerts=no
`);

  if (response.ok) {
    let data = await response.json();

    showWeather(data);
  } else {
    console.log("Error");
  }
}
// Function Display Data And we Call it In Function Api
function showWeather(data) {
  let cartona = "";
  let forecast = data.forecast.forecastday;
  let locName = data.location.name;

  for (i = 0; i < forecast.length; i++) {
    let day = forecast[i];
    let date = new Date(day.date);
    let weekday = [
      new Date(forecast[0].date),
      new Date(forecast[1].date),
      new Date(forecast[2].date),
    ];
    //  If Condation to check if We Get Data Or Not And Display It In html
    if (forecast[i] == forecast[0]) {
      cartona += `

      <div class="col-md-4">
              <div class="item1 text-white">
                <div
                  class="text p-1 d-flex justify-content-between align-items-center"
                >
                  <p>${locName}</p>
                  <p class="pe-2">${weekday[0].toLocaleDateString("en-US", {
                    weekday: "long",
                  })}</p>
                </div>
                <p class="p-2">${locName}</p>
                <div
                  class="degree fw-bold text-white d-flex justify-content-center ms-3 align-items-center w-auto"
                >
                  <p>${forecast[0].day.avgtemp_c}&degC</p>
                  <img src="https:${
                    forecast[0].day.condition.icon
                  }" alt="Icon" />
                </div>
                <p class=" text-center text-primary">${day.day.condition.text}</p>

                <div class="icons d-flex justify-content-around">
                  <div class="img">
                    <img src="./images/umberella@.png" alt="Umbrella" />
                    <p>${forecast[0].hour[0].wind_degree}%</p>
                  </div>
                  <div class="img">
                    <img src="./images/wind.png" alt="Wind" />
                    <p>${forecast[0].hour[0].wind_kph}k/m</p>
                  </div>
                  <div class="img">
                    <img src="./images/compass.png" alt="Compass" />
                    <p>East</p>
                  </div>
                </div>
              </div>
            </div>

      
      `;
    } else if (forecast[i] == forecast[1]) {
      cartona += `
      <div class="col-md-4">
              <div class="item2 pb-5">
                <div class="text ">
                  <p class="text-white p-2 text-center">${weekday[1].toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                    }
                  )}</p>
                </div>
                <div class="degree2 mt-5 pb-5 text-white text-center">
                  <img src="https:${
                    forecast[1].day.condition.icon
                  }" alt="Icon" />
                  <p class="fs-5">${forecast[1].day.avgtemp_c}&degC</p>
                  <p class="fs-5">${forecast[1].day.mintemp_c}&degC</p>
                  <p class="text-primary fs-5">${
                    forecast[1].day.condition.text
                  }</p>
                </div>
              </div>
            </div>`;
    } else if (forecast[i] == forecast[2]) {
      cartona += `
      <div class="col-md-4">
              <div class="item3">
                <div class="text">
                  <p class="text-white p-2 text-center">${weekday[2].toLocaleDateString(
                    "en-US",
                    {
                      weekday: "long",
                    }
                  )}</p>
                </div>
                <div class="degree2 pb-5 mt-5 text-white text-center">
                  <img src="https:${
                    forecast[2].day.condition.icon
                  }" alt="Icon" />
                  <p class="fs-5">${forecast[2].day.avgtemp_c}&degC</p>
                  <p class="fs-5">${forecast[2].day.mintemp_c}&degC</p>
                  <p class="text-primary fs-5">${
                    forecast[2].day.condition.text
                  }</p>
                </div>
              </div>
            </div>`;
    }
  }

  row.innerHTML = cartona;
}
