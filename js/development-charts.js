(function($) {
    "use strict"; // Start of use strict

var ctx = $("#developmentChart");

var myPieChart = new Chart(ctx,{
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
            fontColor: '#FFF',
            fontStyle: 'bold',
            fontSize: 18
        },
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 255, 255)'
            },
            position: 'left'
        },
        animation: { animateScale: true }
    }
});

})(jQuery); // End of use strict