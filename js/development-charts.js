var myPieChart;
var linearChart;

var yearsOfExperience = new Date().getFullYear() - new Date(2015, 1, 5).getFullYear();

$(document).ready(function() {

});

function createChart() {
    var ctx = $("#developmentChart");

    myPieChart = new Chart(ctx,{
        type: 'pie',
        data: {
            datasets: [{
                data: [3, 2, 0.6],
                backgroundColor: [
                    'rgba(20, 155, 32, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                ],
                borderColor: [
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)',
                ],
                borderWidth: 1
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                '.Net',
                'Angular & VueJs',
                'Swift (IOS)'
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Tech stack',
                fontColor: 'rgb(3, 3, 3)',
                fontStyle: 'bold',
                fontSize: 18
            },
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(3, 3, 3)'
                },
                position: 'left'
            },
            animation: { animateScale: true }
        }
    });

    var theme = localStorage.getItem('theme');

    if (theme == 'dark') {
        pieChartSwitchLightOff();
    }

    $("#light-off").click(function() { 
        pieChartSwitchLightOff();
    });
    
    $("#light-on").click(function() { 
        pieChartSwitchLightOn();
    });

    return myPieChart;
}

function createStackChart() {
    var ctx = $("#developmentStackChart");

    linearChart = new Chart(ctx,{
        type: 'bar',
        data: {
            datasets: [{
                label: 'Experience in years',
                data: [yearsOfExperience - 2, yearsOfExperience],
                backgroundColor: [
                    'rgba(20, 155, 32, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ],
                borderColor: [
                    'rgba(255,255,255,1)',
                    'rgba(255,255,255,1)'
                ],
                borderWidth: 1
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Frontend',
                'Backend'
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Backend vs Frontend experience',
                fontColor: 'rgb(3, 3, 3)',
                fontStyle: 'bold',
                fontSize: 18
            },
            legend: {
                display: false,
                labels: {
                    fontColor: 'rgb(3, 3, 3)'
                },
                position: 'left'
            },
            animation: { animateScale: true },
            scales: {
                xAxes: [{
                    stacked: false,
                    gridLines:{
                        display:false
                    },
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                        callback: function(value) {
                            return value + ' year(s)';
                        },
                        stacked: false
                    },
                    gridLines:{
                        color:"#DDDDD"
                    },
                }]
            }
        }
    });

    var theme = localStorage.getItem('theme');

    if (theme == 'dark') {
        barChartSwitchLightOff();
    }

    $("#light-off").click(function() { 
        barChartSwitchLightOff();
    });
    
    $("#light-on").click(function() { 
        barChartSwitchLightOn();
    });

    return linearChart;
}

function pieChartSwitchLightOn() {
    myPieChart.options.legend.labels.fontColor = 'rgb(3, 3, 3)';
    myPieChart.options.title.fontColor = 'rgb(3, 3, 3)';
    myPieChart.update();
}

function barChartSwitchLightOn() 
{
    linearChart.options.legend.labels.fontColor = 'rgb(3, 3, 3)';
    linearChart.options.title.fontColor = 'rgb(3, 3, 3)';
    linearChart.update();
}

function pieChartSwitchLightOff() {
    myPieChart.options.legend.labels.fontColor = 'rgb(255, 255, 255)';
    myPieChart.options.title.fontColor = 'rgb(255, 255, 255)';
    myPieChart.update();  
}

function barChartSwitchLightOff() {
    linearChart.options.legend.labels.fontColor = 'rgb(255, 255, 255)';
    linearChart.options.title.fontColor = 'rgb(255, 255, 255)';
    linearChart.update();    
}
