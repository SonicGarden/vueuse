import { Ref } from 'vue-demi';
declare type UseAutosizeTextareaReturn = {
    resize: () => void;
    reset: () => void;
};
export declare const useAutosizeTextarea: (textarea: Ref<HTMLTextAreaElement | undefined>, maxHeight?: number) => UseAutosizeTextareaReturn;
export {};
