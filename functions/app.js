class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        console.log(canvas);
        g.beginPath()
        g.fillStyle = "red"
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.closePath();
        g.fill();

        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(25,35);
        g.lineTo(25,45);
        g.lineTo(35,47);
        g.lineTo(35,37);
        g.closePath();
        g.fill();

        this.classFunction();
        this.class4function(2, 5)

        console.log(
            this.class4function(5, 2)
            )
    }

    classFunction()
    {
        console.log("MARIO!!!")
    }
    
    class2Function()
    {
        return "BWAHAHAHA!!!";
    }


    class4function(a, b)
    {
        return a * b;

    }

}
let app = new App();
app.runApplication();
