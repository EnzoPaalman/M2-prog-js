class App
{
    runApplication()
    {
        console.log("hello world");
        let appname = "hi misterpister";
        let version = 1.6;
        let versiondate = "24/11/2022";
        let author = "Enzo Paalman";
        let copyright = "sponge inc '2022'";
        let distribution = "sponge inc.";
        let darkmode = true;
        console.log(appname);
        console.log(version);
        console.log(versiondate);
        console.log(author);
        console.log(copyright);
        console.log(distribution);
        console.log(darkmode);
    }
}

let app = new App();
app.runApplication();