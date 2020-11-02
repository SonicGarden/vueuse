import { computed } from 'vue-demi';
import orderBy from 'lodash.orderby';
export var useOrderBy = function (collection, iteratees, orders) {
    return computed(function () { return orderBy(collection.value, iteratees, orders); });
};
