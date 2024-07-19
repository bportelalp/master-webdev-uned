module.exports = resource => ({instanciaJsonPlaceHolder}) => ({
    get: async (req, res) =>
        {
           const { data} = await instanciaJsonPlaceHolder.get(`/${resource}`) 
           return res.send(data)
        },
    getId: async (req, res) =>
        {
            const { data} = await instanciaJsonPlaceHolder.get(`/${resource}/${req.params.id}`) 
            return res.send(data)
        },        
    post: async (req, res) => {
        const { data} = await instanciaJsonPlaceHolder.post(`/${resource}`, req.body) 
        return res.send(data)
    },
    put: async (req, res) => {
        const { data} = await instanciaJsonPlaceHolder.put(`/${resource}/${req.params.id}`, req.body) 
        return res.send(data)
    },
    delete: async (req, res) => {
        const { data} = await instanciaJsonPlaceHolder.delete(`/${resource}/${req.params.id}`) 
        return res.sendStatus(204)
    }
})