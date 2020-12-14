# Loofah







## Run locally

This app requires the back end components to be running in order to start. Speak to @Caitlin-cooling to get the required api reo, db repo and 
tooling repo. 

Once the required repo's have been cloned, to start the app, navigate to the tooling repo: 

### `./scripts/runLoofah.sh`
This will build and run all the required components for loofah. 
Open [http://localhost:3000](http://localhost:3000) to view the UI in the browser.

### Run without building backend
During front end development it can be slow to constantly restart the UI using the runLoofah script. 

A quicker way to start the UI, if you are not making changes to the API and therefore do not require it to be rebuilt, 
is to run this command, which will not rebuild the java components like the runLoofah script does: 

```docker-compose -f docker-compose-loofah.yml down -v && docker-compose  -f docker-compose-loofah.yml build && docker-compose  -f docker-compose-loofah.yml up```

We are working on a better way to do this :) 

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eslint`

Runs eslint
