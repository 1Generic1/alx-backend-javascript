export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (!firstName || !lastName) {
      reject(new Error('First name and last name are required'));
    } else {
      resolve({ firstName, lastName});
    }
  });
}
