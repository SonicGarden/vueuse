import { Ref } from 'vue-demi';
declare type Copy = () => void;
declare type OnSuccess = () => void;
export declare const useCopy: (text: Ref<string>, onSuccess?: OnSuccess | undefined) => Copy;
export {};
