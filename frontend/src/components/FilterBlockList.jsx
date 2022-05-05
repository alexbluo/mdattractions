import { useSelector } from "react-redux";
import FilterBlock from "./FilterBlock";

const FilterBlockList = () => {
  const storeFilters = useSelector((state) => state.filters);

  return (
    <div className="my-1 flex flex-wrap gap-1">
      {Object.entries(storeFilters).map(([category, filters]) =>
        filters.map((filter) => (
          <FilterBlock category={category} filter={filter} key={filter} />
        ))
      )}
    </div>
  );
}

export default FilterBlockList;
