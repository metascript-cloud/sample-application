const fs = require('fs');

export default class FileDatabase {

    /**
     * Check if a file exists at the given path.
     * @param filePath 
     * @returns 
     */
    public exists(filePath : string) : boolean {
        return fs.existsSync(filePath)
    }

    /**
     * Reads a file
     * @param filePath the path to the file.
     * @return the file contents as a string.
     */
    public readFile(filePath : string) {
        const data = fs.readFileSync(filePath, {
            encoding:'utf8', 
            flag:'r'
        });
        return data;
    }

    /**
     * Writes a file to the local file system given file path and contents.
     * @param filePath the path to write the file to
     * @param contents the contents of the file
     */
    public writeFile(filePath : string, contents : string) {
        fs.writeFile(filePath, contents, function(err : any) {
            if(err) {
                return console.error(err);
            }
            console.log("-- Successfully wrote file to: " + filePath + " --")
        }); 
    } 

}