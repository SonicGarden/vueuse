import { Ref } from 'vue-demi';
import { useToggle } from './useToggle';

type Setter = () => void;

export const useBoolean = (initialValue = false): [Ref<boolean>, Setter, Setter] => {
  const [state, toggle] = useToggle(initialValue);
  const setTrue = (): void => toggle(true);
  const setFalse = (): void => toggle(false);

  return [state, setTrue, setFalse];
};
