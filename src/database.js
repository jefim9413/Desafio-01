import fs from 'node:fs'
const databasePath = new URL('../db.json', import.meta.url) 

export class Database {
    #database = {}

    constructor() {
        
    }
}