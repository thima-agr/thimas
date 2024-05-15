<template>
  <div class="w-full h-screen relative">
    <div class="h-[60px] border-b border-b-slate-300"></div>

    <div class="w-full h-[calc(100%-60px)] flex items-center justify-center">
      <Suspense>
        <div class="w-[400px] py-5 px-5 border border-slate-300 rounded-xl">
          <slot></slot>
        </div>

        <template #fallback> Loading... </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
