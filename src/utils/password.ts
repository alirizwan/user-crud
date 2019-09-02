// Keeping this out for future extensions, library switching or for another reason

import bcrypt = require('bcrypt');
const SALT_ROUNDS: number = Number(process.env.SALT_ROUNDS) || 10;

function encrypt (plainKey: string){
  return bcrypt.hash(plainKey, SALT_ROUNDS);
}

function compare (plainKey: string, secretKey: string){
  return bcrypt.compare(plainKey, secretKey);
}

export default {
  encrypt,
  compare
};