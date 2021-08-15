import { Ref } from 'vue-demi';
declare type Toggle = (nextValue?: boolean) => void;
declare type Setter = {
    on: () => void;
    off: () => void;
    toggle: Toggle;
};
export declare const useBoolean: (initialValue?: boolean) => [Ref<boolean>, Setter];
export {};
