var canvasDrawer;
window.onload = function (){
    var canvas = document.getElementById("canvas");
    canvasDrawer = new CanvasDrawer(canvas);
    let r = sessionStorage.getItem("lastR");
    if(r == null) r = 3;
    canvasDrawer.drawArea(r);
    //setParamR();
    canvasDrawer.canvas.addEventListener('click', function (event){
        canvasDrawer.clickDot(event)

    });
}

const errorElement = document.getElementById("error");

document.addEventListener('submit', (e)=>{
    let messages=[]
    if ( isNaN(Y.value)){
        messages.push("Y must be a number!")
    } else if(Y.value>3||Y.value < -5){
        messages.push("Y is out of range!")
    }


    var reg= /(5|-5).(0)+[1-9]/;

    if ((String(Y.value)).match(reg)) {
        messages.push("Really?? >:( ")
    }
    console.log((String(Y.value)).match(reg))

    if (messages.length > 0){
        e.preventDefault();
        errorElement.innerHTML=messages.join(", ")
    }
});

document.addEventListener('click', (event) => {
    const currentTime = Date.now();

    if (clickTimes.length > 0) {
        const previousClickTime = clickTimes[clickTimes.length - 1];
        const interval = currentTime - previousClickTime;

        // Вычисляйте и сохраняйте интервал
        console.log(interval);
    }

    // Записывайте метку времени
    clickTimes.push(currentTime);
});

// Вычисляйте средний интервал
const averageInterval = clickTimes.reduce((a, b) => a + b) / clickTimes.length;

console.log(averageInterval);