function insertChart (chart, color){
    chart.easyPieChart({
        scaleColor: false,
        lineWidth: 7,
        lineCap: 'round',
        barColor: color,
        size: 150,
        animate: 1500
      });
}
$(function() {
    $('.chart').each(function(){
        insertChart($(this), $(this).data('color'))
    })
    // $('.chart').data('easyPieChart').update(parcent)
});


document.addEventListener("DOMContentLoaded", function(event) {
    let hr = document.querySelector('#sc');
    const deg = 6;
    setInterval(()=>{
        let day = new Date();
        let ss = day.getSeconds() * deg;
        hr.style.transform = `rotateZ(${(ss)}deg)`;
    })
});