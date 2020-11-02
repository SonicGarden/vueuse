import { Ref, ComputedRef } from 'vue-demi';
import orderBy from 'lodash.orderby';
export declare const useOrderBy: <T>(collection: Ref<readonly T[]>, iteratees: Parameters<typeof orderBy>[1], orders?: Parameters<typeof orderBy>[2]) => ComputedRef<readonly T[]>;
