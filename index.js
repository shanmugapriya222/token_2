const encrypt = require('./script');

const payload = { userId: 123, username: 'student001' };
const secret = 'my-secret-key';

const token = encrypt(payload, secret);
console.log('JWT Token:', token);
