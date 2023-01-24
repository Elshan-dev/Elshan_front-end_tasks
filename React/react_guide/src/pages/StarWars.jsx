import axios from "axios";
import { PageContainer } from "components/PageContainer";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export function StarWars({}) {
  const [name, setName] = useState("");
  const { peopleID } = useParams();
  useEffect(() => {
    axios
      .get(`https://www.swapi.tech/api/people/${peopleID}`)
      .then(({ data }) => {
        setName(data.result.properties.name);
      });
  }, []);
  return (
    <PageContainer>
      <div>{name}</div>
    </PageContainer>
  );
}
