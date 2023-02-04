import axios from "axios";
import { PageContainer } from "components/PageContainer";
import { useEffect, useReducer } from "react";
import { CatFactsReducer } from "reducers/CatFactsReducer";

const url = "https://catfact.ninja/facts?max_length=60";

export function Catfacts() {

    const [facts,dispatch] = useReducer(CatFactsReducer,[])
  useEffect(() => {
    axios.get(url).then(({ data }) => {
        console.log(data.data)
      dispatch({type:'GetFacts',payload:data.data})
    });
  }, []);

function removeFact(fact){
     dispatch({type:'RemoveFact',payload:fact})
}

  return (
    <PageContainer>
      {
        facts.map(({fact})=>{
            return <p key={fact}>{fact} <button onClick={()=>removeFact(fact)}>x</button> </p>
        })
      }
    </PageContainer>
  );
}
