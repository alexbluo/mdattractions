import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, reset } from "../redux/filtersSlice";
import FilterBlock from "./FilterBlock";

const FilterBlockList = () => {
  const checkedFilters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <div className="my-1 flex flex-wrap gap-1">
      {/* render clear all block if there is at least one filter */}
      {Object.values(checkedFilters).some((filter) => filter.length > 0) && (
        <FilterBlock onClick={() => dispatch(reset())}>Clear All</FilterBlock>
      )}

      {/* map each checked filter to a designated filter block */}
      {Object.entries(checkedFilters).map(([category, filters]) =>
        filters.map((filter) => (
          <FilterBlock
            onClick={() => dispatch(remove({ category, filter }))}
            key={filter}
          >
            {filter}
          </FilterBlock>
        ))
      )}
    </div>
  );
};

export default FilterBlockList;
