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