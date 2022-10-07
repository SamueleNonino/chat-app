import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSocket } from '../context/socket.context'
import MessagesContainer from '../containers/Messages'
import RoomsContainer from '../containers/rooms'

export default function Home() {

  const {socket} = useSocket();

  return (
    <>
      <div>
        <RoomsContainer/>
        <MessagesContainer/>
      </div>
    </>
  )
}
