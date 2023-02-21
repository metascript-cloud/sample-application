import App from "../interfaces/App";
import Job from "../model/Job";
import Player from "../model/Player";
import Server from "../server/Server";
import FileDatabase from "../util/FileDatabase";

export default class MyApp implements App {

    // http server
    private server : Server;

    // file database resposible for doing io operations
    private database : FileDatabase;

    // array representing list of players
    private playerList : Player[];

    // the path that we should use to save player database
    private readonly playerDatabaseFile = "data/players.db";

    constructor() {
        // initialise all variables as usual
        this.database = new FileDatabase();
        this.server = new Server();
        this.playerList = [];
    }

    /**
     * Application started initialise and load what needs to be loaded
     */
    public start() : void {
        this.server.listen(8888);
    }

    /**
     * Application stopped do cleanup
     */
    public stop() : void {
        console.log("-- Application stopped --");
    }

    /**
     * Method responsible for adding players to the player list.
     */
    public addPlayersToList() : void {
        if(this.database.exists(this.playerDatabaseFile)) {
            // no need to execute this if player list already exist
            return;
        }
        console.log("-- Adding players to list --");
        
        const anthony = new Player("Anthony");
        const mark = new Player("Mark");
        const tom = new Player("Tom");

        anthony.getJobs().push(new Job(1, "Developer"));
        mark.getJobs().push(new Job(1, "Doctor"));
        tom.getJobs().push(new Job(1, "Carpenter"));

        // adding to array using index
        this.playerList[0] = anthony;

        // using the .push method of array handles the index automatically for us
        this.playerList.push(mark);
        this.playerList.push(tom);

        // get the size of players in the array
        const arrayLength = this.playerList.length;
        console.log(arrayLength + " players were added to the array.");
    }

    /**
     * Loop through the player array and display all the players
     */
    public displayPlayerList() : void {
        console.log("-- Displaying player list --")
        for(let index = 0; index < this.playerList.length; index++) {
            // getting a value from the array using index
            const player = this.playerList[index];
            // print out the data to the console
            console.log(player);
        }
    }

    /**
     * Persist the player list to a file called players.json
     */
    public savePlayerList() : void {
        if(this.database.exists(this.playerDatabaseFile)) {
            console.log("Skipping file save, local database already exists.");
            return;
        }
        this.database.writeFile(this.playerDatabaseFile, JSON.stringify(this.playerList));
    }

    /**
     * Load the player list
     */
    public loadPlayerList() : void {
        if(!this.database.exists(this.playerDatabaseFile)) {
            console.log("Player list does not exist as yet");
            return;
        }
        const jsonString = this.database.readFile(this.playerDatabaseFile);
        const jsonObject = JSON.parse(jsonString);
        this.playerList = jsonObject;
        console.log("Loaded " + this.playerList.length + " from local database.");
    }

}