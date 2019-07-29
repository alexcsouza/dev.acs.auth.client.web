import {Handler} from "./../core/Handler"
import {Handleble} from "./../core/Handleble"

export class UserHandler implements Handler{

    handleItem(item: Handleble) {
        throw new Error("Method not implemented.");
    }    
    
    handleArray(items: Handleble[]) {
        throw new Error("Method not implemented.");
    }
    
}