# Product Selection
Written with node@6.10.1 and npm@3.10.10

## Setup
To get coding, follow instructions here:  https://github.com/nodejs/node-gyp

Then just run
```sh
$ npm install
```
after checkout.

## Usage
Once up-and-running, you can navigate to http://localhost:8080. However, the app expects to find a cookie 'customerID'. To set this up, go to http://localhost:8080/setCustomerID and select the location you wish to use. Then go back to http://localhost:8080 and you should see the products for the location you selected.
On clicking 'checkout', you'll be taken to the confimation page. Before submitting from here, a webserver is expected at http://localhost:3000. A very simple one is available from https://github.com/jaucourt/post_print, that will simply log POSTed values to the console.

## Tests
### Running unit tests as a developer
To run a test watcher, it's recommended that you run
```sh
$ npm run test-watch
```
This will run a hot-reloading version of the tests in a headless environment using PhantomJS.
To debug tests, run
```sh
$ npm run test-debug
```
This will run a hot-reloading version of the tests within a managed instance of Chrome and allow for debugging via the browser. To debug, switch to the instance of Chrome, click the debug button and then inspect the newly-opened tab. It'll be possible to view tests within the Sources tab, under localhost:9876/base/test/spec. Original code is visible under "webpack://"/./client.

N.B. The port used can vary, so insert whatever port it has ended up using rather than 9876. It's also possible to run tests in the browser of your choice, just by going to localhost:port.

## Running the app
To run a hot-reloading version of the app, run
```sh
$ npm run start
```
