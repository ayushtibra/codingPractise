const crypto = require('crypto');
//Using AES encryption
const algorithm = 'aes-256-cbc';
//secret key generate 32 bytes of random data
const key = crypto.randomBytes(32);
// generate 16 bytes of random data
const iv = crypto.randomBytes(16);

function encrypt(text) {
  let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted.toString('hex'),
  };
}

function decrypt(text) {
  let iv = Buffer.from(text.iv, 'hex');
  let encryptedText = Buffer.from(text.encryptedData, 'hex');
  let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

var hw = encrypt('000136043');
console.log(hw);
console.log(decrypt(hw));
