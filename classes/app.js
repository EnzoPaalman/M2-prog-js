class Dino
{
    constructor(naam, vleeseter, leeftijd, leeft, honger)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = leeft;
        this.honger = honger;
    }

    Eetdino(dino)
    {
        dino.leeft = false;
    }

}




class Plant
{
    constructor(naam)
    {
        this.naam = naam;
    }
}

class App
{
    runApplication()
    {
        let dino = new Dino("Trex",true,10,true,true);
        console.log(dino)

           

        let dino2 = new Dino("Goober",false,12,true,true);
        dino.Eetdino(dino2);   
        console.log(dino2)

        let dino3 = new Dino("Ballsmeister12",true,32,true,true);
        console.log(dino3)
        


    }
}


let app = new App();
app.runApplication();
