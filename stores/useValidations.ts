import { z } from 'zod';

export default defineStore('useValidations', () => {
  const messages = {
    email: 'Insira um email válido',
    common: 'Preencha o campo corretamente',
    cpf: 'Digite um CPF válido',
  };

  const validateAuthLogin = z.object({
    email: z.string().email(messages.email),
    password: z.string().trim().min(1, messages.common),
  });

  return { validateAuthLogin };
});
