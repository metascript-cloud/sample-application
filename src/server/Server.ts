import express, { Express, Request, Response } from 'express';

const path = require('path');

export default class Server {
 
    private app: Express = express();

    /**
     * Start express server on the specified port number.
     * @param port 
     */
    public listen(port : number) {
        this.app.listen(port, () => {
            console.log(`⚡️[MetaScript]: Server is running at http://localhost:${port}`);
        });
        this.registerEndpoints();
    }

    /**
     * Registers the path of the endpoints.
     */
    public registerEndpoints() {
        this.app.get('/', (req: Request, res: Response) => {
            res.sendFile(path.join(__dirname, '/index.html'));
        });
    }
    
}