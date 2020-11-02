import { Ref } from 'vue-demi';
declare type Toggle = (nextValue: boolean) => void;
export declare const useToggle: (initialValue: boolean) => [Ref<boolean>, Toggle];
export {};
