$(document).ready(function() {
    $('#about').load('../pages/about/about.html', function() {
        myPieChart = createChart();
    });
});