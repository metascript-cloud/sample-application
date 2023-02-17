export default class Job {

    private id: number;
    private jobName : string;

    /**
     * Default constructor of a job, this will take two parameters
     * @param id 
     * @param jobName 
     */
    constructor(id : number, jobName : string) {
        this.id = id;
        this.jobName = jobName;
    }

    public getId() : number {
        return this.id;
    }

    public getJobName() : string  {
        return this.jobName;
    }

}