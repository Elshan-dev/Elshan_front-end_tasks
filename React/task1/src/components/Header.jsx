export function Header({ bgColor, text}) {
  return (
    <header
      style={{
        backgroundColor: bgColor,
        textAlign:'center',
        fontSize:'30px',
        fontWeight:'bolder',
        color:'white'
      }}
    >
      {text}
    </header>
  );
}
