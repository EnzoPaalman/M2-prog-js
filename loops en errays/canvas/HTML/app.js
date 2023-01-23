class App
{ 
    runApplication()
    { 
        console.log("hello world");
        let arr = ["peter", "ballswarrior", "wu chang", "steve", "wu cho", "duwap kanine"];
        console.log(arr);
        let headers = document.getElementsByClassName("artists");

        for(let i = 0; i < headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
    }
    
}

let app = new App();
app.runApplication();