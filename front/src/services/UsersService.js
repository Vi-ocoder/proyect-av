import httpClient from "./httpClient";

const END_POINT = "/api/users";

const getAllUsers = () => httpClient.get(END_POINT);

const insertUser = (user) => httpClient.post(END_POINT, user);

const upDateUser = (numDoc, user) => httpClient.put(END_POINT + "/" + numDoc, user);

export {
    getAllUsers,
    insertUser,
    upDateUser
};