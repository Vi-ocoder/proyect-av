const userModel = require("../models/usersModels");

module.exports = class UsersController {
    static async getAllUsers(req, res) {
        try {
            const users = await userModel.find();
            res.status(200).json(users);

        } catch (err) {
            res.status(404).json({ message: err.message });

        }

    }
    static async getByNumDoc(req, res) {
        const numDoc = req.params.numDoc;
        try {
            const user = await userModel.findOne({ "numDoc": numDoc });
            if (user != null) {
                res.status(200).json(user);
            } else {
                res.status(404).json();
            }

        } catch (err) {
            res.status(400).json({ message: err.message });

        }
    }

    static async insertUser(req, res) {
        try {
            const user = req.body;
            const newUser = await userModel.create(user);
            res.status(201).json(newUser);

        } catch (err) {
            res.status(400).json({ message: err.message });

        }
    }

    static async upDateUser(req, res) {
        try {
            const numDoc = req.params.numDoc;
            const user = req.body;
            const newUser = await userModel.updateOne({ "numDoc": numDoc }, user);
            res.status(200).json(newUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async deleteUser(req, res) {
        try {
            const numDoc = req.params.numDoc;
            await userModel.deleteOne({ "numDoc": numDoc });
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    //----
}