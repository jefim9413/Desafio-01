import { Database } from './database.js'
import { randomUUID } from 'node:crypto'
const database = new Database()

export const routes = [
    {
        method: 'GET',
        path:'/tasks',
        handler: (req, res) => {
            const { search } = req.query

            const tasks = database.select('tasks', {
                title: search,
                description: search
            })
            
            return res.end(JSON.stringify(tasks))
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
            const { id } = req.params
            const { title, description } = req.body

            if(!title|| !description) {
                return res.writeHead(400).end(
                    JSON.stringify({message: 'title or description are required' })
                )
            }

            const [ task ] =  database.select('tasks', { id })

            if(!task) {
                return res.writeHead(404).end()
            }

            database.update('tasks', id, { 
                title,
                description,
                updated_at: new Date()
            })

            return res.writeHead(204).end()

        }
    },
    {
        method: 'DELETE',
        path:'/tasks/:id',
        handler: (req, res) => {
            const { id } = req.params

            const [ task ] = database.select('tasks', { id })
            
            if(!task) {
                return res.writeHead(404).end()
            }
            
            database.delete('tasks' , id)

            return res.writeHead(204).end()

        }
    }
]