class App
{
    runApplication()
    {
        let canvas = document.getElementById('canvasId');
        let g = canvas.getContext("2d");
        this.drawHouse(g,200,40, "red");
        this.drawHouse(g,275,40, "blue");
        this.drawHouse(g,350,40, "green");
        this.drawHouse(g,385,210,"yellow");
        this.drawHouse(g,550,210,"orange");
        this.drawHouse(g,550,140,"yellow");
        this.drawHouse(g,550,270,"red");
        this.drawTree(g,350,140);
        this.drawTree(g,150,-30);
        this.drawTree(g,420,-30);
        this.drawTree(g,480,-30);
        this.drawTree(g,540,-30);
        this.drawPop(g,320,160);
        this.drawPop(g,450,0);  
        this.drawPop(g,100,0);
        this.drawRoad(g,100, 100);
        console.log("canvas");

    }

    drawHouse(g,x,y,c)
    {   
        g.beginPath()
        g.fillStyle = c
        g.moveTo(30+x,10+y);
        g.lineTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(80+x,50+y);
        g.lineTo(80+x,30+y);
        g.lineTo(70+x,20+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath()
        g.fillStyle = "black"
        g.moveTo(25+x,35+y);
        g.lineTo(25+x,45+y);
        g.lineTo(35+x,47+y);
        g.lineTo(35+x,37+y);
        g.closePath();
        g.fill();

        g.beginPath()
        g.fillStyle = "brown"
        g.moveTo(40+x,55+y);
        g.lineTo(55+x,60+y);
        g.lineTo(55+x,41+y);
        g.lineTo(40+x,37+y);
        g.closePath();
        g.fill();

        g.beginPath()
        g.fillStyle = "black"
        g.arc(43+x,50+y,1,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
    }
        

    drawTree(g,x,y)
    {
        g.beginPath()
        g.fillStyle = "brown"
        g.moveTo(30+x,90+y);
        g.lineTo(40+x,90+y);
        g.lineTo(40+x,130+y);
        g.lineTo(30+x,130+y);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.beginPath();
        g.fillStyle = "green"
        g.arc(35+x,80+y,15,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();


        
    }

    drawPop(g,x,y)
    {
        g.beginPath();
        g.fillStyle = "white"
        g.arc(35+x,60+y,10,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle = "white"
        g.arc(35+x,75+y,12,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();
     
        g.beginPath()
        g.fillStyle = "white"
        g.arc(35+x,90+y,15,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath()
        g.fillStyle = "black"
        g.arc(32+x,55+y,1,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath()
        g.fillStyle = "black"
        g.arc(38+x,55+y,1,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

        g.beginPath()
        g.fillStyle = "orange"
        g.arc(35+x,58+y,1,0,Math.PI*2);
        g.stroke();
        g.fill();
        g.closePath();

    }

    drawRoad(g,x,y)
    {
        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(20+x,90+y);
        g.lineTo(20+x,30+y);
        g.lineTo(450+x,30+y);
        g.lineTo(450+x,90+y);
        g.fill();
        g.closePath();
        
        g.beginPath()
        g.fillStyle = "gray"
        g.moveTo(380+x,90+y);
        g.lineTo(450+x,90+y);
        g.lineTo(450+x,300+y);
        g.lineTo(380+x,300+y);
        g.fill();
        g.closePath();
    }
    
}
let app = new App();
app.runApplication();
