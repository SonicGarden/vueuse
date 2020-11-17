import { onMounted, onUnmounted, Ref } from 'vue-demi';

const TEXTAREA_MAX_HEIGHT = 400;

type UseAutosizeTextareaReturn = {
  resize: () => void;
  reset: () => void;
};

export const useAutosizeTextarea = (
  textarea: Ref<HTMLTextAreaElement | undefined>,
  maxHeight = TEXTAREA_MAX_HEIGHT,
): UseAutosizeTextareaReturn => {
  const fitToContent = (): void => {
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

  const reset = (): void => {
    if (textarea.value) {
      // eslint-disable-next-line no-param-reassign
      textarea.value.style.minHeight = '';
    }
  };

  onMounted(() => {
    fitToContent();
    textarea.value?.addEventListener('input', fitToContent);
  });

  onUnmounted(() => {
    textarea.value?.removeEventListener('input', fitToContent);
  });

  const resize = (): void => {
    reset();
    fitToContent();
  };

  return { resize, reset };
};
