import { computed, Ref, ComputedRef } from 'vue-demi';
import orderBy from 'lodash.orderby';

export const useOrderBy = <T>(
  collection: Ref<ReadonlyArray<T>>,
  iteratees: Parameters<typeof orderBy>[1],
  orders?: Parameters<typeof orderBy>[2],
): ComputedRef<ReadonlyArray<T>> => {
  return computed(() => orderBy(collection.value, iteratees, orders));
};
