class App
{
    runApplication()
    {
        let title = document.getElementById("title")
        let RG = Math.random();

        if (RG == 0)
        {
            title.style.backgroundColor ="#410ddb";
        }

        if (RG < 0.2)
        {
            title.style.backgroundColor ="#b817d1";
        }

        if (RG >= 0.2 && RG <= 0.6 )
        {
            title.style.backgroundColor ="#f50707";
        }

        if (RG > 0.6)
        {
            title.style.backgroundColor ="#07f5c9";
        }
    }
}

let app = new App();
app.runApplication();