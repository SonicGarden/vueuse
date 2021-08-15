import { ref, Ref } from 'vue-demi'

type Toggle = (nextValue?: boolean) => void

type Setter = {
  on: () => void
  off: () => void
  toggle: Toggle
}

export const useBoolean = (initialValue = false): [Ref<boolean>, Setter] => {
  const state = ref<boolean>(initialValue)
  const toggle: Toggle = (nextValue) => {
    state.value = nextValue ?? !state.value
  }
  const on = (): void => toggle(true)
  const off = (): void => toggle(false)

  return [state, { on, off, toggle }]
}
