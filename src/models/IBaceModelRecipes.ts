import {IRecipe} from "./IRecipe.ts";

export type IBaceModelRecipes={
    title:number;
    limit:number;
    skip:number;
    recipes:IRecipe[]
}