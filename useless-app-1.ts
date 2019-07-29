import { User } from "./src/User/User"
import { UserHandler } from "./src/User/UserHandler"
import { Handler } from './src/core/Handler';

console.time('Time')

let msg:string = "Hello Fucked Up World!"
let code:number = 123

let printError = function(code:number, msg:string):void{
    console.log('[%s] %s', code, msg)
}

let log = (code:number, msg:string) => console.log('[%s] %s', code, msg)

printError(code, msg)
log(code, msg)

let user:User = new User("alexdcesouza@gmail.com", "123")
let userHandler:Handler = new UserHandler()
//userHandler.handleItem(user)

console.timeEnd('Time')
