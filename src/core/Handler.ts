import {Handler} from "./../core/Handler"
import {Handleble} from "./../core/Handleble"
export interface Handler{
    handleItem(item:Handleble)
    handleArray(items:Handleble[])
} 