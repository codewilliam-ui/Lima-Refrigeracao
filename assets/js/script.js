let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 6000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

;}

document.addEventListener('DOMContentLoaded', function() {
    const details = document.querySelectorAll('details');
    
    details.forEach(detail => {
        detail.addEventListener('click', function() {
            // Fecha todos os detalhes, exceto o clicado
            details.forEach(d => {
                if (d !== detail) {
                    d.removeAttribute('open');
                }
            });
        });
    });
});



