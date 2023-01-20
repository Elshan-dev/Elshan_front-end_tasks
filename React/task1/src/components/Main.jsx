import pic from "../images/333.jpg"
export function Main({heading, text, width,height}) {
  return (
    <><div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}>
      <h1>{heading}</h1>
      <p>{text}</p>
      <img src={pic} alt="" width={width} height={height}/>
      </div>
    </>
  );
}
