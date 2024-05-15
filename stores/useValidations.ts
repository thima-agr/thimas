import { z } from 'zod';

export default defineStore('useValidations', () => {
  const messages = {
    email: 'Insira um email válido',
    common: 'Preencha o campo corretamente',
  };

 const validateAuthLogin = z.object({
    
 })

  return {validateAuthLogin}
});
