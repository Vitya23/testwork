import { guid } from "@datorama/akita"


export type CATS = {
    id: string;
    info:{
        title: string;
        description: string;
        photo: string;
    }
    like: boolean;
}



export function createCat(info){
    return{
        id:guid(),
        info,
        like:false
 } as CATS
}

