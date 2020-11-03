var icons = {
    "C#":"./icons/csharp.svg",
    "HTML": "./icons/html5.svg",
    "C++": "./icons/C++.svg",
    "C": "./icons/C++.svg",
    "Python": "./icons/python.svg",
    "Go": "./icons/go.svg",
    "JavaScript": "./icons/javascript.svg"
}

var app = new Vue({ 
    el: '#app',
    data: {
        projects: []
    }
});

var githubURL = 'https://api.github.com/users/jamesstallworthy/repos?sort=updated'

$.ajax({
    url: githubURL,
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
        for (var i = 0; i < res.length; i++){
            if (!res[i].fork){
                var proj = {
                    name: res[i].name,
                    desc: res[i].description,
                    link: res[i].html_url,
                    language: res[i].language,
                    languageIcon: icons[res[i].language]
                }

                app.projects.push(proj)
            }
        }
        $(".loading-text").remove()
    },
    error(xhr,status,error){
        $(".loading-text").text("Issue contacting github.com")
    }
});