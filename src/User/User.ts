import {Handleble} from "./../core/Handleble"

export class User implements Handleble{
    /*
    private username:string;
    private password:string;

    constructor(username:string, password:string){
        this.username = username
        this.password = password
    }
    */
   
    constructor(private username:string, private password:string){}

    getUsername(){
        return this.username
    }

    getPassword(){
        return this.password
    }
    
}