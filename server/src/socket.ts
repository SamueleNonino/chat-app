import { connect } from "http2";
import {Server, Socket} from "socket.io";
import log from "./utils/logger";

const EVENT = {
    connections : "connection",
}

function socket({io} : {io: Server}){

    io.on(EVENT.connections, (socket: Socket) => {
        log.info(`User connect ${socket.id}`);
    });


}

export default socket;