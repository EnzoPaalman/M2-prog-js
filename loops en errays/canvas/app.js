class App
{ 
    runApplication()
    { 
        console.log("hello world");
        for (let i = 0; i < 201; i++) {
            this.tekenCircle();
            
        }
    }

    tekenCircle()
    {
        let a = (Math.random() * 1601);
        let b = (Math.random() * 801);
        let c = (Math.random() * 90);
        let canvas = document.getElementById("canvas");
        let g = canvas.getContext("2d");
        console.log(canvas);
        g.beginPath();
        g.fillStyle = "red";
        g.arc(a,b,c,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
    }
    
    
}


let app = new App();
app.runApplication();