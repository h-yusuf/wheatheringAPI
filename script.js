// const searchButton = document.querySelector("#button-submit");
// const inputKeyword = document.querySelector("#input");

//  function  searchWeather() {
//     fetch(
//         "https://api.openweathermap.org/data/2.5/weather?q=" +
//         inputKeyword.value +
//         "&appid=bfc55dae938e2e19f113350baa352b75&units=metric"
//     )
//         .then(response => response.json())
//         .then(response => {
//             let temp = document.querySelector(".temp");
//             let city = document.querySelectora(".city");
//             let humidity = document.querySelector(".humidity");
//             let speed = document.querySelector(".speed");
//             let cloud = document.querySelector(".cloud");


//             temp.innerHTML = `<span>${response.main.temp.toFixed(0)}°</span>`
//             city.innerHTML = `${response.name}, ${response.sys.country}, ${response.weather[0].description}`
//             humidity.innerHTML = `${response.main.humidity}%`
//             speed.innerHTML = `${response.wind.speed} m/s`
//             cloud.innerHTML = ` ${response.clouds.all}%`

        
//         })
//         .catch(error => {
//             console.error("Error fetching data:", error);
//             let city = document.querySelector(".city");
//             let temp = document.querySelector(".result");
//             temp.innerHTML = "nul";
//             city.innerHTML = "Data tidak ditemukan";
//           });
      
//     inputKeyword.value = null;
// };
// inputKeyword.addEventListener("keydown", function (event) {
//     if (event.key === "Enter") {
//       searchWeather();
//     }
//   });
  
//   // Event listener untuk tombol pencarian
//   searchButton.addEventListener("click", function () {
//     searchWeather();
//   });

const searchButton = document.querySelector("#button-submit");
const inputKeyword = document.querySelector("#input");

function searchWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputKeyword.value +
      "&appid=bfc55dae938e2e19f113350baa352b75&units=metric"
  )
    .then((response) => response.json())
    .then((response) => {
      let tempElements = document.querySelectorAll(".temp");
      let cityElements = document.querySelectorAll(".city");
      let humidityElements = document.querySelectorAll(".humidity");
      let speedElements = document.querySelectorAll(".speed");
      let cloudElements = document.querySelectorAll(".cloud");
      // let formatted  = formattedTime = document.querySelectorAll(".sunrise");

      // Iterasi melalui NodeList dan perbarui elemen-elemen dengan data cuaca
      tempElements.forEach((element) => {
        element.innerHTML = `<span>${response.main.temp.toFixed(0)}°</span>`;
      });

      cityElements.forEach((element) => {
        element.innerHTML = `${response.name}, ${response.sys.country}, ${response.weather[0].description}`;
      });

      humidityElements.forEach((element) => {
        element.innerHTML = `${response.main.humidity}%`;
      });

      speedElements.forEach((element) => {
        element.innerHTML = `${response.wind.speed} m/s`;
      });

      cloudElements.forEach((element) => {
        element.innerHTML = `${response.clouds.all}%`;
      });
    //   unix_timestamp.forEach((element) => {
    //     element.innerHTML = `${response.sys.sunrise}`;
    //   });
  // Create a new JavaScript Date object based on the timestamp

  unix_timestamp = `${response.sys.sunrise}`;
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  var date = new Date(unix_timestamp * 1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  var seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  // console.log(cityElements);


  console.log(formattedTime);

    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      let cityElements = document.querySelectorAll(".city");
      let tempElements = document.querySelectorAll(".result");

      tempElements.forEach((element) => {
        element.innerHTML = "nul";
      });

      cityElements.forEach((element) => {
        element.innerHTML = "Data tidak ditemukan";
      });
    });

  inputKeyword.value = null;
}

inputKeyword.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchWeather();
  }
});

// Event listener untuk tombol pencarian
searchButton.addEventListener("click", function () {
  searchWeather();
});

// Create a new Date object
function updateLocalTime() {
    const currentDate = new Date();
    const options = { hour: '2-digit', minute: '2-digit' };
    const localTime = currentDate.toLocaleTimeString(undefined, options);
  
    // Display the local time
    document.getElementById('local-time').textContent = `${localTime}`;
  }
  
  function toggleColon() {
    const colonElement = document.getElementById('colon');
    colonElement.style.visibility = colonElement.style.visibility === 'visible' ? 'hidden' : 'visible';
  }
  // Call the function to update the time immediately
  updateLocalTime();
  
  // Update the time every second (1000 milliseconds)
  setInterval(updateLocalTime, 1000);


// Apex Charts

window.addEventListener("load", function () {
    let options = {
        // set the labels option to true to show the labels on the X and Y axis
        xaxis: {
            show: true,
            categories: [
                "00:00",
                "04:00",
                "08:00",
                "12:00",
                "16:00",
                "20:00",
                "00:00",
            ],
            labels: {
                show: true,
                style: {
                    fontFamily: "poppins",
                    cssClass: "chart-time",
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
            labels: {
                show: true,
                style: {
                    fontFamily: "poppins",
                    cssClass: "text-xs  fill-gray-50 ",
                },
                formatter: function (value) {
                    return value + "°c";
                },
            },
        },
        series: [
            {
                name: "Celcius",
                data: [20, 18, 21, 17, 15, 26, 25],
                color: "#30638B",
            },
        ],
        chart: {
            sparkline: {
                enabled: true,
            },
            height: "50%",
            width: "100%",
            type: "area",
            fontFamily: "poppins",
            dropShadow: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                opacityFrom: 0.55,
                opacityTo: 0,
                shade: "#E3F3FB",
                gradientToColors: ["#E3F3FB"],
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 3,
        },
        legend: {
            show: true,
        },
        grid: {
            show: false,
        },
    };

    if (
        document.getElementById("labels-chart") &&
        typeof ApexCharts !== "undefined"
    ) {
        const chart = new ApexCharts(
            document.getElementById("labels-chart"),
            options
        );
        chart.render();
    }
});
