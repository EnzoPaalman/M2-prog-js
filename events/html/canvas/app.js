class App
{
    runApplication()
    {
        let myCanvas = document.getElementById("canvasID");
        let g = myCanvas.getContext("2d");
        

        myCanvas.addEventListener("mousemove", (evt)=>{
            console.log("mouse move");

        })

        g.fillStyle = "red";
        g.rect(100, 100, 30, 30);
        g.stroke();
        g.fill();

    }

    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}

let app = new App();
app.runApplication();