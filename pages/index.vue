<template>
  <div>
    <div class="leading-0">
      <h1 class="text-xl font-semibold">{{ greetings() }}</h1>
      <p class="text-gray-600 text-sm">Acessar sua conta para continuar</p>
    </div>

    <UForm class="mt-5 space-y-3" @submit="onSubmit" :state="state">
      <UFormGroup name="email" label="Email / CPF">
        <UInput type="email" v-model="state.email" :disabled="loading" />
      </UFormGroup>

      <UFormGroup name="password" label="Senha" class="relative">
        <UInput
          :type="showPassword ? 'text' : 'password'"
          :disabled="loading"
          v-model="state.password"
        />

        <div
          class="absolute flex items-center justify-center top-[50%] translate-y-[-50%] right-[1px]"
          v-if="state.password.trim().length > 0"
        >
          <UTooltip text="Mostrar Senha">
            <UButton
              variant="solid"
              color="white"
              class="flex items-center justify-center ring-0 shadow-none w-[30px] h-[30px]"
              @click="showPassword = !showPassword"
              square
            >
              <Icon name="solar:eye-broken" size="1.25rem" />
            </UButton>
          </UTooltip>
        </div>
      </UFormGroup>

      <UFormGroup class="text-end">
        <NuxtLink to="/" class="text-[13px] underline">
          Esqueci minha senha
        </NuxtLink>
      </UFormGroup>

      <div>
        <UButton class="w-full mt-3 justify-center" color="black" :disabled="loading" :loading="loading">
          Entrar
        </UButton>
      </div>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'auth',
});

const state = reactive({
  email: '',
  password: '',
});

const validations = useValidations();

const showPassword = ref<boolean>(false);
const loading = ref<boolean>(false);

const onSubmit = async () => {
  try {
    loading.value = true;
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};
</script>
