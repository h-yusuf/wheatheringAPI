// ApexCharts options and config
const searchButton = document.querySelector("#button-submit");
const inputKeyword = document.querySelector("#input");

searchButton.addEventListener("click", function () {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        inputKeyword.value +
        "&appid=bfc55dae938e2e19f113350baa352b75&units=metric"
    )
        .then(response => response.json())
        .then(response => {
            let result = document.querySelector(".result");
            result.innerHTML = `<span>${response.main.temp.toFixed(0)}°С</span>`
        })
        .then(response => {
            let result = document.querySelector(".city");
            result.innerHTML = `<span>${response.name}, ${response.sys.country}</span>`
        })


    inputKeyword.value = null;
});

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
