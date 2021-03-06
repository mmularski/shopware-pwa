import {
  SearchFilter,
  SearchFilterType,
} from "@shopware-pwa/commons/interfaces/search/SearchFilter";

const concatIds = (ids: string[]) => ids.join("|");
const isFilterForProperty = (property: string, filter: any) =>
  filter.hasOwnProperty("field") && filter.field === property;

interface StoreApiListingFilters {
  manufacturer?: string;
  properties?: string;
  rating?: number; // to be handled later on
  "shipping-free"?: boolean; // to be handled later on
  "min-price"?: number; // to be handled later on
  "max-price"?: number; // to be handled later on
  "no-aggregations"?: number; // 0 if false, 1 otherwise
}

interface GenericFilter extends SearchFilter {
  value?: string[];
  queries?: GenericFilter[];
  parameters?: any; // for range
}

export function convertToStoreApiFilters(
  filters: Array<GenericFilter>
): StoreApiListingFilters {
  let params: StoreApiListingFilters = {};

  if (!filters || !filters.length) {
    return {};
  }

  for (const filter of filters) {
    if (isFilterForProperty("price", filter) && filter.parameters) {
      const { lt, gt, lte, gte } = filter.parameters;
      if (lt || lte) {
        params["max-price"] = lt || lte;
      }

      if (gt || gte) {
        params["min-price"] = gt || gte;
      }
    }

    if (isFilterForProperty("manufacturerId", filter) && filter.value) {
      params.manufacturer = concatIds(filter.value);
    }
    if (filter.type === SearchFilterType.MULTI && filter.queries) {
      for (const subFilter of filter.queries) {
        /* istanbul ignore else */
        if (isFilterForProperty("propertyIds", subFilter)) {
          params.properties = concatIds(subFilter.value as any);
        }
      }
    }
  }

  return params;
}
