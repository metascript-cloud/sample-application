const fs = require('fs');

export default class FileDatabase {

    /**
     * Reads a file from the local file system.
     * @param filePath
     */
    public readFile(filePath : string) {
        const data = fs.readFileSync('./input.txt', {
            encoding:'utf8', 
            flag:'r'
        });
    }

    /**
     * Writes a file to the local file system given file path and contents.
     * @param filePath 
     * @param contents 
     */
    public writeFile(filePath : string, contents : string) {
        fs.writeFile(filePath, contents, function(err : any) {
            if(err) {
                return console.error(err);
            }
        }); 
    } 

}