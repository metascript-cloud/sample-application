/**
 * Represents a person.
 * @author Anthony
 */

export default class Person {

    private name: string;

    constructor(name : string) {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

}