import axios from "axios";
import { PageContainer } from "components/PageContainer";
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  if (action.type === "GetData") {
    return action.payload;
  } else if (action.type === "RemoveElement") {
    let newState = state.filter((elem) => elem.uid !== action.payload);
    return newState;
  } else if (action.type === "AddElement") {
    return [...state, action.payload];
  }else if(action.type === "EditElement"){
    return state.map((elem)=>{
      if(elem.uid === action.payload.uid){
        return {...elem,name:action.payload.name}
      }
      return elem
    })
  }
};
export function StarWarsWithReducer({}) {
  // const [data, setData] = useState([]);
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    axios.get("https://www.swapi.tech/api/people").then(({ data }) => {
      const newData = data.results.map(({ uid, name }) => ({ name, uid }));
      dispatch({ type: "GetData", payload: newData });
    });
  }, []);
  return (
    <PageContainer
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
        padding: "20px 0",
      }}
    >
      <h1>Star Wars With Reducer</h1>
      {data.map(({ uid, name }) => {
        return (
          <Link
            key={uid}
            // to={`/starwars/${uid}`}
            style={{
              display: "block",
              color: "black",
              textDecoration: "none",
              height: 200,
              width: 160,
              boxShadow: "0 0 10px black",
              textAlign: "center",
              borderRadius: 10,
            }}
          >
            <h1>{name}</h1>
            <p>{uid}</p>
            <button
              onClick={() => {
                dispatch({ type: "RemoveElement", payload: uid });
              }}
            >
              X
            </button>
           <button onClick={()=>{
            let name = prompt('change name')
            dispatch({type:"EditElement",payload:{name,uid}})
           }}>
            edit element
           </button>
          </Link>
        );
      })}
      <button
        onClick={() => {
          let name = prompt("enter your name");
          let uid = prompt("enter your uid");
          let newobj = {
            name,
            uid
          };
          dispatch({type:"AddElement",payload:newobj})
        }}
      >
        add element
      </button>
    </PageContainer>
  );
}
