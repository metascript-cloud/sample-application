import MyApp from "./app/MyApp";

const myApp = new MyApp();
myApp.start();

// schedule the stop event to trigger after delay
setTimeout(myApp.stop, 10000);