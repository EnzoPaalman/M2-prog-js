class App
{
    runApplication()
    {
        console.log("Hello world");
        let appName = ("website");
        let versieNummer = 0.9;
        let versiedatum = 22/11/2022;
        let autheur = ("Enzo");
        let copyright = ("Enzo");
        let distributor = ("Enzo");
        let darkmode = true;

        console.log(appName);
        console.log(versieNummer);
        console.log(versiedatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributor);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();