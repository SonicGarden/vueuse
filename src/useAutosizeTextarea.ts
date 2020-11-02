import { Ref, watch } from 'vue-demi';
import { useEventListener } from '@vueuse/core';

const TEXTAREA_MAX_HEIGHT = 400;

type ResetTextareaSize = () => void;

export const useAutosizeTextarea = (
  textarea: Ref<HTMLTextAreaElement | undefined>,
  maxHeight = TEXTAREA_MAX_HEIGHT,
): ResetTextareaSize => {
  const resize = (): void => {
    if (!textarea.value) return;

    let adjustedHeight = textarea.value.clientHeight;

    if (maxHeight > adjustedHeight) {
      adjustedHeight = Math.max(textarea.value.scrollHeight, adjustedHeight);
      adjustedHeight = Math.min(maxHeight, adjustedHeight);

      if (adjustedHeight > textarea.value.clientHeight) {
        // eslint-disable-next-line no-param-reassign
        textarea.value.style.minHeight = `${adjustedHeight}px`;
      }
    }
  };

  const resetTextareaSize: ResetTextareaSize = () => {
    if (textarea.value) {
      // eslint-disable-next-line no-param-reassign
      textarea.value.style.minHeight = '';
    }
  };

  useEventListener('input', resize, false, textarea.value);

  // NOTE: To be resized immediately after rendering
  const stop = watch(textarea, () => {
    resize();
    stop();
  });

  return resetTextareaSize;
};
