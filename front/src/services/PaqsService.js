import httpClient from "./httpClient";

const END_POINT = "/api/paqs";

const getAllPaqs = () => httpClient.get(END_POINT);

const insertPaq = (paq) => httpClient.post(END_POINT, paq);

const upDatePaq = (idPaq, product) => httpClient.put(END_POINT + "/" + idPaq, product);

const deletePaq = (idPaq, product) => httpClient.delete(END_POINT + "/" + idPaq, product);

export {
    getAllPaqs,
    insertPaq,
    upDatePaq,
    deletePaq,
};