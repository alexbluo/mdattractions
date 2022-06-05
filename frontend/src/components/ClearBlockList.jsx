import { useSelector, useDispatch } from "react-redux";
import { remove, reset } from "../redux/filtersSlice";
import { changeFilterSearchInput } from "../redux/searchSlice";
import ClearBlock from "./ClearBlock";

const ClearBlockList = () => {
  const checkedFilters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleClearAll = () => {
    dispatch(reset());
    dispatch(changeFilterSearchInput(""));
  };

  return (
    <div className="my-1 flex flex-wrap gap-1">
      {/* render clear all block if there is at least one filter */}
      {Object.values(checkedFilters).some((filter) => filter.length > 0) && (
        <ClearBlock onClick={handleClearAll} reverse>
          Reset
        </ClearBlock>
      )}

      {/* map each checked filter to a designated filter block */}
      {Object.entries(checkedFilters).map(([category, filters]) =>
        filters.map((filter) => (
          <ClearBlock
            onClick={() => dispatch(remove({ category, filter }))}
            key={filter}
          >
            {filter}
          </ClearBlock>
        ))
      )}
    </div>
  );
};

export default ClearBlockList;