declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string
    }
  }


}

declare module 'vue' {
  // hack to take care of typing errors caused by the
  // vue-i18n library.
  interface ComponentCustomProperties {
    $i18n: VueI18n | ExportedGlobalComposer
  }
}

export {};