import { useState, useEffect } from "react";
import Banner from "./Banner";
import Heading from "./Heading";

export default function Search() {
  const [breedData, setBreedData] = useState({});

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch(`https://api.thedogapi.com/v1/breeds`);
        const data = await res.json();
        setBreedData(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchDogData();
  }, []);

  console.log("Breed data", breedData);

  return (
    <>
      <Banner>
        <form></form>
        <Heading level={1}>Find your Perfect Pup</Heading>
      </Banner>
    </>
  );
}
