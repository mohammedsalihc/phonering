import { IUser } from "../../modules/auth/auth.types";
import { connectNATS, sc } from "../../utils/nats";

export const publishUserRegistered = async(data:IUser)=>{
   const  nc = await connectNATS()
    nc.publish(
    "user.registered",
    sc.encode(JSON.stringify(data))
  );

  console.log("Event published: user.registered", data);
}