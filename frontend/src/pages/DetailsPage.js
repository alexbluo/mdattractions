import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/DetailsPage.css"

export default function DetailsPage() {
  const [details, setDetails] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    fetch(`/api/attractions/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  // then use data to fill in components and return;
  return (
    <p>
      Attraction: {id}, {JSON.stringify(details)}
    </p>
  );
}
