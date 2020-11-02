import { Ref } from 'vue-demi';
import clipboardCopy from 'clipboard-copy';

type Copy = () => void;
type OnSuccess = () => void;

export const useCopy = (text: Ref<string>, onSuccess?: OnSuccess): Copy => {
  return () => {
    clipboardCopy(text.value);
    if (onSuccess) {
      onSuccess();
    }
  };
};
