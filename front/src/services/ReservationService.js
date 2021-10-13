import httpClient from "./httpClient";

const END_POINT = "/api/reservations";


const insertReservation = (reserva) => httpClient.post(END_POINT, reserva);
const findReservationsId = (idCliente) => httpClient.get(END_POINT + "/" + idCliente)


export {
    insertReservation,
    findReservationsId,
};