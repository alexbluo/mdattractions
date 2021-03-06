import axios from "axios";
import qs from "qs";
import { useInfiniteQuery } from "react-query";
import { useSelector } from "react-redux";
import crab from "../images/crab.jpg";
import Button from "./Button";
import Preview from "./Preview";
import PreviewPreloader from "./PreviewPreloader";

export default function PreviewList() {
  const { filterSearchInput } = useSelector((state) => state.search);
  const checkedFilters = useSelector((state) => state.filters);

  const { data, error, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      ["attractions", filterSearchInput, checkedFilters],
      async ({ pageParam = 0 }) => {
        const params = qs.stringify({
          search: filterSearchInput,
          filters: checkedFilters,
          page: pageParam,
        });

        const res = await axios.get(`/api/attractions?${params}`);

        return {
          data: res.data.attractions,
          nextPageNumber: res.data.nextPageNumber,
        }; // return to "data"
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPageNumber,
        keepPreviousData: true,
      }
    );

  /**
   * Render previews based on the state of the data (loading, empty, good)
   * @returns skeleton loaders if data is loading, nothing matched crab if data is empty, otherwise list of previews
   */
  const renderPreviews = () => {
    // weird shorthand for making 8 skeleton loaders
    if (isLoading) {
      // eslint-disable-next-line react/no-array-index-key
      return [...Array(8)].map((_, i) => <PreviewPreloader key={i} />);
    }

    const previews = data.pages
      .map((group) =>
        group.data.map((doc) => <Preview {...doc} key={doc.attraction_id} />)
      )
      .flat(1); // flatten so that preview length in next step is always accurate

    if (previews.length === 0) {
      return (
        <div className="col-span-2">
          <span className="mx-auto block w-full rounded-2xl bg-[#f6f6f6] p-6 text-center font-poppins">
            <img className="mx-auto w-1/2" src={crab} alt="" />
            Nothing Matched!
          </span>
        </div>
      );
    }
    return previews;
  };

  if (isError) return <span>Error: {error.message}</span>;
  return (
    <div className="flex w-full flex-col justify-center gap-12">
      <div className="grid gap-12 sm:grid-cols-2">{renderPreviews()}</div>
      {hasNextPage && (
        <Button handleClick={fetchNextPage} inverted>
          Load More
        </Button>
      )}
    </div>
  );
}
