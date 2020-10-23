module.exports = {
    findAll: async (model) => {
        return await model.find()
    },
    findByName: async (model, req_params_name) => {
        return await model.findOne({
            name: req_params_name
        })
    },
    createOne: async (model, req_body) => {
        return await model.create(req_body)
    },
    updateOne: async (model, req_params_name, req_body) => {
        return await model.findOneAndUpdate({ name: req_params_name }, req_body, { new: true })
    },
    deleteOne: async (model, req_params_name) => {
        return await model.findOneAndRemove({ name: req_params_name })
    }
}