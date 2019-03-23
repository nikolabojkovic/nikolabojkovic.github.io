var myPieChart;

$(document).ready(function() {

});

function createChart() {
    var ctx = $("#developmentChart");

    myPieChart = new Chart(ctx,{
        type: 'pie',
        data: {
            datasets: [{
                label: '# of years',
                data: [2.5, 1, 0.6],
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
                'Desktop app',
                'Web',
                'Mobile'
            ]
        },
        options: {
            title: {
                display: true,
                text: '4 years experience',
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
        chartSwitchLightOff();
    }

    $("#light-off").click(function() { 
        chartSwitchLightOff();
    });
    
    $("#light-on").click(function() { 
        chartSwitchLightOn();
    });

    return myPieChart;
}

function chartSwitchLightOn() {
    myPieChart.options.legend.labels.fontColor = 'rgb(3, 3, 3)';
    myPieChart.options.title.fontColor = 'rgb(3, 3, 3)';
    myPieChart.update();
}

function chartSwitchLightOff() {
    myPieChart.options.legend.labels.fontColor = 'rgb(255, 255, 255)';
    myPieChart.options.title.fontColor = 'rgb(255, 255, 255)';
    myPieChart.update();
}
