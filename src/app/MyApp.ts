import App from "../interfaces/App";
import FileDatabase from "../util/FileDatabase";

export default class MyApp implements App {

    private database : FileDatabase;

    constructor() {
        this.database = new FileDatabase();
    }

    public start() : void {
        console.log("Application started");
    }

    public stop() : void {
        console.log("Application stopped")
    }

}