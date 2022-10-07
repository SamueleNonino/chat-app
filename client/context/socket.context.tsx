import { createContext, useContext, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";

interface Context{
    socket: Socket;
    userName?: string;
    setUserName: Function;
}

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({socket, setUserName: () => false});

function SocketProvider(props: any){
    const [userName, setUserName] = useState("");

    return <SocketContext.Provider value={{socket}} {...props} /> ;
}

export const useSocket = () => useContext(SocketContext);

export default SocketProvider;



