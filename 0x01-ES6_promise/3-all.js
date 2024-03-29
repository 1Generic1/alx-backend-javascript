import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`${user.firstName} ${user.lastName}`);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}
