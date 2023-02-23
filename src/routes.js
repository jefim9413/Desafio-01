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
                id: 1,
                title,
                description,
                completed_at: new Date(),
                created_at: new Date(),
                updated_at: new Date()
            }

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