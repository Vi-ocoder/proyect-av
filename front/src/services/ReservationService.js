import httpClient from "./httpClient";

const END_POINT = "/api/reservations";


const insertReservation = (reserva) => httpClient.post(END_POINT, reserva);



export {
    insertReservation,
};