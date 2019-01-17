import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

const generateHash = (password) => {
    return bcrypt.hash(password, SALT_ROUNDS);
};

const checkPassword = (password, hash) => {
    return bcrypt.compare(password, hash);
};

export { generateHash, checkPassword };