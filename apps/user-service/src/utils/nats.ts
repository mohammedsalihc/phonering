import { connect, NatsConnection, StringCodec } from 'nats';

let nc: NatsConnection;
export const sc = StringCodec();

export const connectNATS = async () => {
  nc = await connect({
    servers: process.env.NATS_URL!,
  });

  console.log('Connected to NATS');
  return nc;
};

export const getNatsClient = () => {
  if (!nc) {
    throw new Error('NATS not connected');
  }
  return nc;
};
