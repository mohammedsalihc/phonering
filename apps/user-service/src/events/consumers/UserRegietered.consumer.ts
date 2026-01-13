import { connectNATS,sc } from "../../utils/nats"

export const LisernRegistered = async()=>{
    const nc = await connectNATS()
    const sub = nc.subscribe('user.registered')
    for await(const msg of sub){
        const data = JSON.parse(sc.decode(msg.data))
        console.log('data',data)
    }
}