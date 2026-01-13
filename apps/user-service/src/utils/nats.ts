import { connect, NatsConnection, StringCodec } from "nats";

let nc: NatsConnection;

export const connectNATS = async () => {
  if (!nc) {
    nc = await connect({ servers: "nats://localhost:4222" });
    console.log("Connected to NATS");
  }
  return nc;
};

export const sc = StringCodec();
