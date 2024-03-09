export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    if (!fileName) {
      reject(new Error('File name is required'));
    } else {
      reject(new Error(`${fileName} cannot be processed`));
    }
  });
}
