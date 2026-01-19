import { error } from 'node:console';
import { UserModel } from '../../modules/user/user.model';
import { getNatsClient, sc } from '../../utils/nats';

export class UserRegisteredListener {
  listen() {
    const nc = getNatsClient();
    const sub = nc.subscribe('user.registered');

    (async () => {
      for await (const msg of sub) {
        const data = JSON.parse(sc.decode(msg.data));
        console.log('USER REGISTERED EVENT:', data);

        let exsist_user = await UserModel.findOne({auth:data?.id})
        if(exsist_user){
            return error('user already exist')
        }
        let create_user = {
            auth:data.id,
            phone:data.phone,
            name:data.name
        }
        let new_user = await UserModel.create(create_user)
        console.log('User stored in User Service DB',new_user);
      }
    })();
  }
}
