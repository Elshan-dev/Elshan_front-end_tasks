import axios from "axios";
import { PageContainer } from "components/PageContainer";
import { useEffect } from "react";
import { connect } from "react-redux";
const url = "https://jsonplaceholder.typicode.com/posts";
function PostsRedux({posts,dispatch}) {
  useEffect(() => {
    axios.get(url).then(({ data }) => {
        dispatch({type:'AddPosts',payload:data})
    });
  }, []);
  return <PageContainer>
    {
        posts.map(({id,title})=> <p key={id}>{title}</p>)
    }
  </PageContainer>;
}

function mapStoreToProps(state) {
  return state;
}
export default connect(mapStoreToProps)(PostsRedux)