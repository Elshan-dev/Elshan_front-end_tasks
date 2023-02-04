import axios from "axios";
import { PageContainer } from "components/PageContainer";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function StarWarsPeople({}) {
  const [properties, setProperties] = useState({});
  const { peopleID } = useParams();
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(
        `https://www.swapi.tech/api/people/${peopleID}`
      );
      console.log({data})
      let { birth_year, mass, name, eye_color } = data.result.properties;
      setProperties({birth_year,mass,name,eye_color})
    }
    getData();
  }, []);
  return (
    <PageContainer>
      <h1>Name:{properties.name}</h1>
      <h2>Mass:{properties.mass}</h2>
      <h3>
        Eye color:{properties.eye_color}
        <span
          style={{
            display: "inline-block",
            width: 30,
            height: 20,
            backgroundColor: properties.eye_color,
            borderRadius: "50%",
            marginBottom: -5,
          }}
        ></span>
      </h3>
      <h4>Birth year:{properties.birth_year}</h4>
      <Link to="/starwars">Go back</Link>
    </PageContainer>
  );
}
