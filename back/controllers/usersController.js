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
    static async getByNumberID(req, res) {
        const numberID = req.params.numberID;
        try {
            const user = await userModel.findOne({ "numberID": numberID });
            if (user != null) {
                res.status(200).json(user);
            } else {
                res.status(404).json();
            }

        } catch (err) {
            res.status(400).json({ message: err.message });

        }
    }
    static async getByEmail(req, res) {
        const email = req.params.email;
        try {
            const user = await userModel.findOne({ "email": email });
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
            let user = req.body;
            if (req.file != undefined) {
                const photoName = req.file.filename;
                user.photo = "/" + photoName
            }
            user = await userModel.create(user);
            user.password = undefined;
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ "message": err.message })
        }
    }

    static async upDateUser(req, res) {
        try {
            const numberID = req.params.numberID;
            const user = req.body;
            if (req.file != undefined) {
                const photoName = req.file.filename;
                user.photo = "/" + photoName
            }
            const newUser = await userModel.updateOne({ "numberID": numberID }, user);
            res.status(200).json(newUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async deleteUser(req, res) {
        try {
            const numberID = req.params.numberID;
            await userModel.deleteOne({ "numberID": numberID });
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }


    static async validateUser(req, res) {
        try {
            const credential = req.body;
            const user = await userModel.findOne({ "email": credential.email });
            if (user == undefined || user == null) {
                res.status(404).json({ "message": "El usuario ingresado no existe." });
            } else if (user.password != credential.password) {
                res.status(403).json({ "message": "Usuario / contrase??a no valido" });
            } else {
                user.password = undefined;
                res.status(200).json(user);
            }

        } catch (err) {
            res.status(400).json({ "message": err.message })
        }
    }
}