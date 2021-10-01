import httpClient from "./httpClient";

const END_POINT = "/api/paqs";

const getAllPaqs = () => httpClient.get(END_POINT);

const insertPaq = (paq) => httpClient.post(END_POINT, paq);


export {
    getAllPaqs,
    insertPaq,
};