/**
 * Represents a person.
 * @author Anthony
 */

import Job from "./Job";

export default class Player {

    // name of player
    private name: string;

    // a person can have one more more jobs so store it into an array
    private jobs: Job[];

    // keep track of current score
    private score : number;

    /**
     * Default constructor this is called when the object is created
     * @param name
     */
    constructor(name : string) {
        this.name = name;
        this.jobs = [];
        this.score = 0;
    }

    public getName() : string {
        return this.name;
    }

    public getJobs() : Job[] {
        return this.jobs;
    }

    public getScore() : number {
        return this.score;
    }

    public setScore(score : number) {
        this.score = score;
    }

}