module.exports = resource => ({ dbInstance: dbClient }) => ({
    get: async (req, res) => {
        const { data } = await dbClient.get(resource)
        return res.send(data)
    },
    getId: async (req, res) => {
        const { data } = await dbClient.getById(resource, req.params.id)
        return res.send(data)
    },
    post: async (req, res) => {
        const { data } = await dbClient.post(resource, req.body)
        return res.send(data)
    },
    put: async (req, res) => {
        const { data } = await dbClient.put(resource, req.params.id, req.body)
        return res.send(data)
    },
    delete: async (req, res) => {
        const { data } = await dbClient.delete(resource, req.params.id,)
        return res.sendStatus(204)
    }
})