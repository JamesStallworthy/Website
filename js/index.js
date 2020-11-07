Vue.component('website-header',{
    props: ['page'],
    template: `<header class="masthead mb-auto">
                    <div class="inner">
                        <h3 class="masthead-brand">James Stallworthy</h3>
                        <nav class="nav nav-masthead justify-content-center">
                            <!---https://fontawesome.com/license--->
                            <a class="nav-link" v-bind:class="{active:(page=='Home')}" href="index.html"><img src="./icons/Home.svg" style="width:30px;height:30px"> Home</a>
                            <a class="nav-link" v-bind:class="{active:(page=='Flying')}" href="flying.html"><img src="./icons/Flying.svg" style="width:30px;height:30px"> Flying</a>
                            <a class="nav-link" v-bind:class="{active:(page=='Projects')}" href="projects.html"><img src="./icons/Github.svg" style="width:30px;height:30px"> Projects</a>
                        </nav>
                    </div>
                </header>`
});

Vue.component('website-footer',{
    template:`
        <footer class="mastfoot mt-auto">
            <div class="inner">
                <p>Thank you bootstrap for making my life easier: <a href="https://getbootstrap.com/">Bootstrap</a>.</p>
                <p>Connect with me on <a href="https://www.linkedin.com/in/james-stallworthy-457515b3/"><img src="./icons/Linkedin.svg" style="width:20px;height:20px; margin-top:-5px"></a></p>
            </div>
        </footer>
    `
});

Vue.component('home-page-content',{
    template:`
        <main role="main" class="inner cover">
            <h1 class="cover-heading">James Stallworthy</h1>
            <br>
            <p class="lead">Full Stack Developer at Intelligent Delivery Solutions working on data quality products</p>
            <p class="lead">Student Private Pilot on the weekends</p>
            <p class="lead">
                <a href="projects.html" class="btn btn-lg btn-secondary">Projects</a>
                <a href="flying.html" class="btn btn-lg btn-secondary">Flying!</a>
            </p>
        </main>
    `
});

Vue.component('flying-page-content',{
   template:`
        <main role="main" class="inner cover">
            <h1 class="cover-heading">Coming Soon!</h1>
        </main>
   ` 
});

var app = new Vue({ 
    el: '#app'
});

