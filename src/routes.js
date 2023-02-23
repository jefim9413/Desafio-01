import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
const database = new Database()

export const routes = [
    {
        method: 'GET',
        path:'/tasks',
        handler: (req, res) => {
            
        }
    },
    {
        method: 'POST',
        path:'/tasks',
        handler: (req, res) => {
            const { title , description } = req.body
            
            if(!title){
                return res.writeHead(400).end(
                    JSON.stringify({ message: 'title is required'})
                )         
            }

            if(!description){
                return res.writeHead(400).end(
                    JSON.stringify({ message: 'description is required'})
                )   
            }

            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: new Date(),
                created_at: new Date(),
                updated_at: new Date()
            }
            
            database.insert('tasks', task)

            return res.writeHead(201).end()
        }
    },
    {
        method: 'PUT',
        path:'/tasks/:id',
        handler: (req, res) => {
            
        }
    },
    {
        method: 'DELETE',
        path:'/tasks/:id',
        handler: (req, res) => {
            
        }
    }
]