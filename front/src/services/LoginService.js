import httpClient from "./httpClient";

const END_POINT = "/api/authenticate";

const validateUser = (email, password) => {
    const user = {
        "email": email,
        "password": password
    };
    return httpClient.post(END_POINT, user);
};

export {
    validateUser
}