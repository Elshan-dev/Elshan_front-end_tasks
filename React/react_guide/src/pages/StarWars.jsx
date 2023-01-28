import axios from "axios";
import { PageContainer } from "components/PageContainer";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function StarWars({}) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://www.swapi.tech/api/people").then(({ data }) => {
      const newData = data.results.map(({ uid, name }) => ({ name, uid }));
      setData(newData);
    });
  }, []);
  return (
    <PageContainer style={{
      display: 'flex',
      flexWrap:'wrap',
      gap:10,
      justifyContent:'center',
      padding:'20px 0'
    }}>
      {data.map(({ uid, name }) => {
        return (
          <Link
            key={uid}
            to={`/starwars/${uid}`}
            style={{
              display: "block",
              color: "black",
              textDecoration: "none",
              height: 200,
              width: 160,
              boxShadow: "0 0 10px black",
              textAlign: "center",
              borderRadius:10
            }}
          >
            <h1>{name}</h1>
            <p>{uid}</p>
          </Link>
        );
      })}
    </PageContainer>
  );
}
