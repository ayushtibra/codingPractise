const crypto = require('crypto');
//Using AES encryption
const algorithm = 'aes-256-cbc';
//secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);
// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);

function encrypt(text) {
  // the cipher function
  let cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
  // encrypt the message
  // input encoding
  // output encoding
  let encryptedData = cipher.update(text, 'utf-8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}

function decrypt(text) {
  // the decipher function
  const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
  // decrypt the message
  // input encoding
  // output encoding
  let decryptedData = decipher.update(text, 'hex', 'utf-8');
  decryptedData += decipher.final('utf-8');

  return decryptedData;
}

var hw = encrypt('000136207');
// console.log(hw);
console.log(decrypt('944229657ca5b90a28d4739c5d89747f'));
