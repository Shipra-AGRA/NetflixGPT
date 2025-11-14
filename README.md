# NetflixGPT
A project to explore GPT integration with Netflix-like UI for personalized movie recommendations.
features:
-login/signup page
    -sign In/sign Up form
    -redirect to browse page
-Browse(after authentication)
    -Header
    -Main Movie
        -Trailer in the background
        -title & description
        -movie suggestions
            -movielists*N
-NetflixGPT
    -searchbar
    -movies suggestions

steps:
-header
-routing of app
-login & signup form
-form validation
-firebase config and app deploy
-create signup user account
-implemented signin/signup user api
-created redux store
-implemented sign out
-updated profile
-resolve bug: can able to access browse page with auth and if i already signed in it should take me to the /browse page without login


setup firebase:
-firebase configuration
    -firstly go to firebase on google and created a project do some steps too and choose a firebase account too when asks and select all options.
    -go to that project and there is an option (add app) choose web from that option then registers the project with any name and also selects setup firebase and then give some command to install firebase and then created a firebase.js file in utils folder and add code whatever was given on firebase while registering app
    -selects authentication from left side bar. click get started and select Email/Password.
-for app deployment
    -firebase login in vs code terminal
    -firebase init
    -select option hosting website for static webpage
    -choose existing project
    -selects one app
    -write build or dist (this options ask about build folder of the app)
    -write no, again no
    -firebase deploy
    -can now check on the url given in the terminal