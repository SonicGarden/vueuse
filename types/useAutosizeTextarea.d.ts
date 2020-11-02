import { Ref } from 'vue-demi';
declare type ResetTextareaSize = () => void;
export declare const useAutosizeTextarea: (textarea: Ref<HTMLTextAreaElement | undefined>, maxHeight?: number) => ResetTextareaSize;
export {};
