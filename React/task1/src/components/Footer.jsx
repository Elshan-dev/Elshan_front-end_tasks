export function Footer({ bgColor, text}) {
  return (
    <header
      style={{
        backgroundColor: bgColor,
        textAlign:'center',
        fontWeight:'normal',
        color:'white',
        marginTop:'10px'
      }}
    >
      {text}
    </header>
  );
}