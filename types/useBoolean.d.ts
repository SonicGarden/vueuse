import { Ref } from 'vue-demi';
declare type Setter = () => void;
export declare const useBoolean: (initialValue?: boolean) => [Ref<boolean>, Setter, Setter];
export {};
