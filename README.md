# Carousel Test 


## Quick Overview

Carousel Test is React based responsive Carousel powered by BootStrap.

### Get Started Immediately

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them
Install Npm and Node and Yarn
* https://yarnpkg.com/en/docs/install
* https://www.npmjs.com/get-npm

### Technologies Used

Few third-party libraries were used also for differnet functionalities:
* Bootstrap 4 for responsivenss
* Axios for CRUD Operations
* enzyme for Testing

### Installing

A step by step series of examples that tell you how to get a development env running

* Open command prompt inside folder
* Type yarn add
* After completion type npm start

Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── containers/
    ├── components/
    ├── core/
        ├── services/
        ├── constants.js
    ├── assets/
        ├── css/
        ├── images/
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can open your project folder:

```sh
cd my-app
```

Inside the newly created project, you can run some built-in commands:
### Setting Environment Variable
Before running the application it's necessary for the user to set the API Key for fetching the data from server.
Variable is REACT_APP_ImageFetch_ApiKey

>Note: You must create custom environment variables beginning with `REACT_APP_`. Any other variables except `NODE_ENV` will be ignored to avoid accidentally [exposing a private key on the machine that could have the same name]

These environment variables can be useful for displaying information conditionally based on where the project is
deployed or consuming sensitive data that lives outside of version control.
#### Windows (cmd.exe)

```cmd
set REACT_APP_ImageFetch_ApiKey=Your_Api_Key
```

(Note: the lack of whitespace is intentional.)

#### Linux, macOS (Bash)

```bash
REACT_APP_ImageFetch_ApiKey=Your_Api_Key
```

    
### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.<br>
You will see the build errors and lint warnings in the console.

<p align='center'>
<img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width='600' alt='Build errors'>
</p>

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changed since the last commit.
To see the Test Coverage
```
npm test-- --coverage
```
[Read more about testing.](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed.
