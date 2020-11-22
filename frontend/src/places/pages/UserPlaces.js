import React from "react";
import Card from "../../shared/components/UIElements/Card";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Charminar",
    description: "One of the historical place in Hyderabad",
    imageUrl:
      "https://cdn.theculturetrip.com/wp-content/uploads/2016/06/24498998325_f451c67aae_o.jpg",
    address: "Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad",
    creator: "u1",
    location: {
      lat: 17.2867058,
      lng: 78.4900684,
    },
  },
  {
    id: "p2",
    title: "Hazarduari Palace",
    description: "One of the historical place in West Bengal",
    imageUrl:
      "https://res.cloudinary.com/dwzmsvp7f/image/upload/v1571728597/uojq9gbuamwq2fq7qqjt.jpg",
    address: "Murshidabad, West Bengal 742149",
    creator: "u1",
    location: {
      lat: 24.1877078,
      lng: 88.2616207,
    },
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
