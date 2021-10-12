import httpClient from "./httpClient";

const END_POINT = "/api/users";

const getAllUsers = () => httpClient.get(END_POINT);

const insertUser = (user) => httpClient.post(END_POINT, user);
const insertUserWithPhoto = (user) => httpClient.post(END_POINT, user, {
    headers: {
        "Content-Type": "multipart-/form-data"
    }
});

const upDateUser = (numberID, user) => httpClient.put(END_POINT + "/" + numberID, user);
const upDateUserWithPhoto = (numberID, user) => httpClient.put(END_POINT + "/" + numberID, user, {
    headers: {
        "Content-Type": "multipart-/form-data"
    }
});

const deleteUser = (numberID, user) => httpClient.delete(END_POINT + "/" + numberID, user)

const getByNumberID = (numberID, user) => httpClient.get(END_POINT + "/" + numberID, user)
const getByEmail = (email, user) => httpClient.get(END_POINT + "//" + email, user)

export {
    getAllUsers,
    insertUser,
    upDateUser,
    deleteUser,
    getByNumberID,
    getByEmail,
    upDateUserWithPhoto,
    insertUserWithPhoto
};