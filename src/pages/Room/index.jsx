import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const { roomID } = useParams()

    const myMeeting = async (element) => {
        const appID = 1981088993;
        const serverSecret = "34dc6310795d38337a725e4bd5cf1a2c";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Ahip Sharma");
        const zc = ZegoUIKitPrebuilt.create(kitToken)
    
        zc.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }

  return <div>
    <div ref={myMeeting}/>
  </div>
} 

export default RoomPage
