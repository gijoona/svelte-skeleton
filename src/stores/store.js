import { writable, derived } from "svelte/store";

function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    calc: (cmd) => {
      switch (cmd) {
        case '+':
          update(n => ++n);
          break;
        default:
          update(n => --n);
          break;
      }
    },
    reset: () => set(0)
  }
}

export const count = createCount();

export const double = derived(
  count,
  $count => $count * 2
)