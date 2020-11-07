var icons = {
    "C#":"./icons/csharp.svg",
    "HTML": "./icons/html5.svg",
    "C++": "./icons/C++.svg",
    "C": "./icons/C++.svg",
    "Python": "./icons/python.svg",
    "Go": "./icons/go.svg",
    "JavaScript": "./icons/javascript.svg"
}

var githubURL = 'https://api.github.com/users/jamesstallworthy/repos?sort=updated'

Vue.component('projects-page-title',{
    template:`
        <main role="main">
            <h1 class="cover-heading">Projects</h1>
            <br>
            <a href="https://github.com/JamesStallworthy" class="cover-heading">
                <img class="profileImg" src="https://avatars2.githubusercontent.com/u/10096828?s=460&u=14160522ee24fce99dc2653943d8ee09d9811fe8&v=4" alt="ProfileImg"></img>
                <br>View on Github
            </a>
        </main>
    ` 
});

Vue.component('projects-page-content',{
    data: function (){
        return {
            projects: []
        }
    },
    created: function(){
        var component = this;
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
        
                        component.projects.push(proj)
                    }
                }
                $(".loading-text").remove()
            },
            error(xhr,status,error){
                $(".loading-text").text("Issue contacting github.com")
            }
        });
    },
    template:`
        <!--Projects-->
        <div class="projects-container">
            <h2 class="loading-text">Loading...</h2>

            <div v-for="project in projects">
                <div class="card-body project-card">
                    <h5 class="card-title">{{project.name}}</h5>
                    <p class="card-text">{{project.desc}}</p>
                    <div class="card-footer">
                        <img class="float-left lang-icon" v-bind:src=project.languageIcon v-bind:alt=project.language style="width:35px">
                        <a v-bind:href=project.link class="btn btn-secondary">View</a>
                    </div>
                </div>
            </div>
        </div>
    `
});