export default (): string => {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 5 && hours < 12) return 'Bom dia';
  else if (hours >= 12 && hours <= 18) return 'Boa tarde';
  else return 'Boa noite';
};
