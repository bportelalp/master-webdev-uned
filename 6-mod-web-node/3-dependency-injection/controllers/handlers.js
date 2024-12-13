module.exports = resource => ({ instanciaJsonPlaceHolder: jsonPlaceholderClient }) => ({
    get: async (req, res) => {
        const { data } = await jsonPlaceholderClient.get(resource)
        return res.send(data)
    },
    getId: async (req, res) => {
        const { data } = await jsonPlaceholderClient.getById(resource, req.params.id)
        return res.send(data)
    },
    post: async (req, res) => {
        const { data } = await jsonPlaceholderClient.post(resource, req.body)
        return res.send(data)
    },
    put: async (req, res) => {
        const { data } = await jsonPlaceholderClient.put(resource, req.params.id, req.body)
        return res.send(data)
    },
    delete: async (req, res) => {
        const { data } = await jsonPlaceholderClient.delete(resource, req.params.id,)
        return res.sendStatus(204)
    }
})