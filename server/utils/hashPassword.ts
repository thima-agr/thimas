import bcrypt from 'bcrypt';

export default (password: string): string => {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
};
