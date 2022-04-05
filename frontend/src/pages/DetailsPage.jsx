import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import ButtonLink from "../components/ButtonLink";
import NavBar from "../components/NavBar";
import noImage from "../images/noImage.png";
import findFacet from "../utils/findFacet";

export default function DetailsPage() {
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
   * @returns the dangerouslySetInnerHTML object
   */
  function createAmenitiesMarkup() {
    const amenities = `<ul class="w-full indent-4 truncate"><li>${data.amenities.join(
      "</li><li>"
    )}</li></ul>`;
    return { __html: amenities };
  }

  if (isLoading) return null;
  if (isError) return <span>Error: {error.message}</span>;
  return (
    <>
      <NavBar />
      <div className="content-body-container">
        <div>
          <h1 className="page-title">{data.attraction_name}</h1>
          {/* odd: even: doesnt really work...? */}
          <div className="grid grid-rows-6 font-poppins lg:grid-cols-3 lg:grid-rows-2">
            <div className="flex flex-col bg-gold px-[8%] py-[4%]">
              <h2 className="mb-2 text-2xl">Description</h2>
              {data.description}
            </div>

            {/* two liner buttons USED TO mess up squares */}
            <div className="flex flex-col bg-red px-[8%] py-[4%] text-white">
              <h2 className="mb-2 text-2xl">Website & Contact</h2>
              <div className="grid h-full grid-cols-2 grid-rows-4 gap-4 text-center">
                {data.website_link && (
                  <ButtonLink link={data.website_link} detail>
                    Website
                  </ButtonLink>
                )}
                {data.mailto_link && (
                  <ButtonLink link={data.mailto_link} detail>
                    Email
                  </ButtonLink>
                )}
                {data.phone_number && (
                  <ButtonLink link={`tel:${data.phone_number}`} detail>
                    Phone
                    <br />
                    {data.phone_number}
                  </ButtonLink>
                )}
                {data.fax && (
                  <ButtonLink link={`tel:${data.fax}`} detail>
                    Fax
                    <br />
                    {data.fax}
                  </ButtonLink>
                )}
              </div>
            </div>

            <img
              className="aspect-square w-full object-fill"
              src={
                data.attraction_image.includes("data") // null images include the word "data" in their URI
                  ? noImage
                  : data.attraction_image
              }
              alt=""
            />

            <div className="flex w-auto flex-col bg-red px-[8%] py-[4%] text-white">
              <h2 className="mb-2 text-2xl">Amenities</h2>
              {data.amenities ? (
                <div dangerouslySetInnerHTML={createAmenitiesMarkup()}></div>
              ) : (
                <p>No amenities listed</p>
              )}
            </div>

            <div className="flex flex-col bg-gold px-[8%] py-[4%]">
              <h2 className="mb-2 text-2xl">Location</h2>
              {data.address}
              <br />
              {findFacet(data, "city")}, {data.state}&nbsp;
              {data.zip}
              <br />
              <a
                className="text-white underline decoration-red decoration-4 underline-offset-4 duration-200 ease-in hover:text-red"
                href={data.directions_link}
              >
                Directions
              </a>
            </div>

            <div className="bg-red px-[8%] py-[4%] text-white">
              <h2 className="mb-2 text-2xl">Region</h2>
              <h3 className="text-lg">{findFacet(data, "region")}</h3>
              {data.region_image && (
                <img className="w-full" src={data.region_image} alt="" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
