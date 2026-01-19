import { UserRegisteredListener } from './consumers/UserRegistered.listner';

export const registerEventListeners = () => {
  new UserRegisteredListener().listen();
};
