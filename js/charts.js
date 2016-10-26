//Traffic Widget Data

    //Traffic data set
    var WebTrafficData = {
        labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
        datasets: [
            {
                data: [750,1250,1000,1500,2000,1500,1750,1250,1750,2000,1750,2250],
                backgroundColor: 'rgba(227,227,246, 0.7)',
                lineTension: 0,
                pointBorderColor: '#7477BF',
                pointRadius: 6,
                pointBorderWidth: 2,
                pointBackgroundColor: '#fff'
            }
        ]
    };


//Traffic Line Chart
var traffic = document.getElementById("web-traffic").getContext("2d");
var trafficChart = new Chart(traffic, {
    type: 'line',
    data: WebTrafficData,
    animation: {
        animateScale: true
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 500,
                    stepSize: 500
                },
                gridLines: {
                    drawTicks: false,
                    color: '#858585'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#858585'
                }
            }]
        }
    }
});



//Daily Traffic Widget

    //Daily Traffic data set
    var dailyWebTrafficData = {
        labels: ['S','M','Tu','W','Th','F','S'],
        datasets: [
            {   label: 'Site Traffic',
                data: [75,120,175,125,225,200,100],
                backgroundColor: '#7477BF'
            }
        ]
    };

    //Daily Traffic chart
    var dailyWebTraffic = document.getElementById("daily-web-traffic").getContext("2d");
    var dailyWebTrafficChart = new Chart(dailyWebTraffic, {
        type: 'bar',
        data: dailyWebTrafficData,
        animation: {
            animateScale: true
        },
        options: {
            legend: {
                position: 'bottom'
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    ticks: {
                        max: 250,
                        min: 1,
                        stepSize: 50
                    },
                    gridLines: {
                        drawTicks: false,
                        color: '#858585'
                    }
                }],
                xAxes: [{
                    gridLines: {
                        drawTicks: false,
                        color: '#858585'
                    }
                }]
            }
        }
    });


//Mobile Users Widget

    //Mobile User data set
    var mobileWebData = {
        labels: [
            'Phones',
            'Tablets',
            'Desktops',
        ],
        datasets: [
            {
                data: [15,15,70,],
                backgroundColor: [
                    '#74b1bf',
                    '#81c98f',
                    '#7377bf',
                ]
            }
        ]
    };

    //Draw Mobile User Chart
    var mobileUsers = document.getElementById("mobile-usage").getContext("2d");
    var mobileChart = new Chart(mobileUsers, {
        type: 'doughnut',
        data: mobileWebData,
        animation: {
            animateScale: true
        },
        options: {
            elements: {
                arc: {
                    borderWidth: 0
                }
            },
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 30
                }
            }
        }
    });
