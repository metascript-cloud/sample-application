import express, { Express, Request, Response } from 'express';

export default class Server {
 
    private app: Express = express();

    /**
     * Start express server on the specified port number.
     * @param port 
     */
    public listen(port : number) {
        this.app.use(express.static(process.cwd() + '/public'));
        this.app.listen(port, () => {
            console.log(`⚡️[MetaScript]: Server is running at http://localhost:${port}`);
        });
    }
    
}