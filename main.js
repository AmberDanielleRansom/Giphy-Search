function sendApiRequest(){
    var userInput = document.getElementById("input").value 
    console.log(userInput) 

    var giphyApikey = "froeygtT8Y450JLQNNbAJ38f4zduahCV"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&limit=3&rating=g&api_key=${giphyApikey}`;

    fetch(giphyApiURL).then(function(data){
        return data.json()
    })

    .then(function(json){
        for(i = 0; i < json.data.length; i++){
        console.log(json.data[i].images.fixed_height.url)
        var imagPath = json.data[i].images.fixed_height.url
        var img = document.createElement("img")
        img.setAttribute("src" , imagPath)
        document.body.appendChild(img)
        }
        })
    
    }
