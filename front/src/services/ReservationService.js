import httpClient from "./httpClient";

const END_POINT = "/api/reservations";


const insertReservation = (reserva) => httpClient.post(END_POINT, reserva);
const findReservationsId = (idCliente) => httpClient.get(END_POINT + "/" + idCliente)

const getAllRes = () => httpClient.get(END_POINT);
const deleteRes = (idPaq, reserva) => httpClient.delete(END_POINT + "/" + idPaq, reserva);


export {
    insertReservation,
    findReservationsId,
    getAllRes,
    deleteRes,
};