import io from "socket.io-client";

let socket;

export const init = () => {
    console.log("baglaaaan");
    socket = io("http://localhost:3001", {
        transports: ["websocket"],
    });
    socket.on('connect', ()=> console.log("baglanti basarili"))
}

export const send = (color) => {
    socket.emit('newColor', color)
}