import { ref, Ref } from 'vue-demi';

type Toggle = (nextValue?: boolean) => void;

export const useToggle = (initialValue: boolean): [Ref<boolean>, Toggle] => {
  const state = ref<boolean>(initialValue);
  const toggle: Toggle = (nextValue) => {
    state.value = nextValue ?? !state.value;
  };

  return [state, toggle];
};
