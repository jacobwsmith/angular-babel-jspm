# angular-babel-jspm
Angular 1.x template with babel and jspm. Allows the use of the latest ECMAScript features.
### Setup
npm install
jspm install
### Build option 1 - injects the build.js
jspm bundle app/main --inject
### Build option 2 - you must manual add the build.js to the index.htm
jspm bundle app/main build.js
## Results for testing on local server
Before: 20 requests @ ~ 1360ms 
After: 8 requests @ ~ 480ms
### Resources
https://github.com/jspm/jspm-cli      
https://github.com/jspm/jspm-cli/blob/master/docs/production-workflows.md
### Other build resouces
jspm depcache app/main.js
