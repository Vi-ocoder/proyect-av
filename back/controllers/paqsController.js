const paqModel = require("../models/paqsModels");

module.exports = class PaqsController {
    static async getAll(req, res) {
        try {
            const paqs = await paqModel.find();
            res.status(200).json(paqs);

        } catch (err) {
            res.status(404).json({ message: err.message });

        }

    }
    static async getById(req, res) {
        const id = req.params.idPaq;
        try {
            const paq = await paqModel.findOne({ "idPaq": id });
            if (paq != null) {
                res.status(200).json(paq);
            } else {
                res.status(404).json();
            }

        } catch (err) {
            res.status(400).json({ message: err.message });

        }
    }

    static async insert(req, res) {
        try {
            const paq = req.body;
            const newPaq = await paqModel.create(paq);
            res.status(201).json(newPaq);

        } catch (err) {
            res.status(400).json({ message: err.message });

        }
    }

    static async upDate(req, res) {
        try {
            const id = req.params.idPaq;
            const paq = req.body;
            const newPaq = await paqModel.updateOne({ "idPaq": id }, paq);
            res.status(200).json(newPaq);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async delete(req, res) {
        try {
            const id = req.params.idPaq;
            await paqModel.deleteOne({ "idPaq": id });
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}