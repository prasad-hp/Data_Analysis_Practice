import dotenv from "dotenv"
dotenv.config();

function getEnvVar(key:string):string{
    const value = process.env[key];
    if(!value){
        throw new Error(`Missing Environmental variable ${key}`)
    }
    return value
}

const MONGODB:string = getEnvVar("MONGODB")
const PORT = getEnvVar("PORT")

export {MONGODB, PORT}
