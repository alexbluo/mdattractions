import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ButtonLink from "../components/ButtonLink";
import DetailSection from "../components/DetailSection";
import Map from "../components/Map";
import none from "../images/none.png";

const DetailsPage = () => {
  const id = useParams().id;

  const { data, error, isLoading, isError } = useQuery(
    ["attraction", id],
    async () => {
      const res = await axios.get(`/api/attractions/${id}`);
      return res.data;
    }
  );

  /**
   * Formats the amenities array into html that can be dangerously set
   * @returns the html for amenities
   */
  const createAmenitiesMarkup = () => {
    const amenities = `<ul class="w-full pl-8"><li>
                        ${data.amenities.join("</li><li>")}
                      </li></ul>`;
    return { __html: amenities };
  };

  if (isLoading) return null;
  if (isError) return <span>Error: {error.message}</span>;
  return (
    <div className="flex flex-col">
      <h1 className="page-title">{data.attraction_name}</h1>
      <div className="grid grid-rows-6 font-poppins lg:grid-cols-3 lg:grid-rows-2">
        {/* description */}
        <DetailSection header="Description">{data.description}</DetailSection>

        {/* website and contact via button links */}
        {/* TODO: extract to component with tel prop */}
        <DetailSection header="Website & Contact">
          <div className="grid h-full grid-cols-2 grid-rows-4 gap-4 text-center">
            {data.website_link && (
              <ButtonLink link={data.website_link}>Website</ButtonLink>
            )}
            {data.mailto_link && (
              <ButtonLink link={data.mailto_link}>Email</ButtonLink>
            )}
            {data.phone_number && (
              <ButtonLink link={`tel:${data.phone_number}`}>
                Phone
                <br />
                {data.phone_number}
              </ButtonLink>
            )}
            {data.fax && (
              <ButtonLink link={`tel:${data.fax}`}>
                Fax
                <br />
                {data.fax}
              </ButtonLink>
            )}
          </div>
        </DetailSection>

        {/* image from preview */}
        <img
          className="aspect-square w-full object-fill"
          src={
            !data.attraction_image || data.attraction_image.includes("data") // null images include the word "data" in their URI
              ? none
              : data.attraction_image
          }
          alt=""
        />

        {/* amenities */}
        <DetailSection header="Amenities">
          {/* TODO: move null check to markup function */}
          {data.amenities ? (
            <div dangerouslySetInnerHTML={createAmenitiesMarkup()}></div>
          ) : (
            <p>No amenities listed</p>
          )}
        </DetailSection>

        {/* location */}
        <DetailSection header="Location">
          {data.address}
          <br />
          {data.city}, {data.state}&nbsp;
          {data.zip}
          <br />
          <a
            className="text-white underline decoration-red decoration-4 underline-offset-4 duration-200 ease-in hover:text-red"
            href={data.directions_link}
          >
            Directions
          </a>
        </DetailSection>

        {/* region */}
        <DetailSection header="Region">
          <h3 className="text-lg">{data.region}</h3>
          {data.region_image && (
            <img className="w-full" src={data.region_image} alt="" />
          )}
        </DetailSection>
      </div>
      <Map
        center={{
          lat: data.location.coordinates[1],
          lng: data.location.coordinates[0],
        }}
        centerName={`${data.attraction_name} (current)`}
      />
    </div>
  );
};

export default DetailsPage;
