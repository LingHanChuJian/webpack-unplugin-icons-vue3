/// <reference types="unplugin-icons/types/vue" />

declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const Component: DefineComponent<{}, {}, any>;
    export default Component;
}
