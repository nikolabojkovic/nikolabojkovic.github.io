$(document).ready(function() {
    $('#about').load('../pages/about/about.html', function() {
        myPieChart = createChart();
        linearChart = createStackChart();
        $('#years').text(new Date().getFullYear() - new Date(1993, 4, 20).getFullYear());
        $('#years-of-experience').text(new Date().getFullYear() - new Date(2015, 1, 5).getFullYear());
    });
});