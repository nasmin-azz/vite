import React from "react";

const Test = () => {
  let sample = "saeed";
  let name = <h1>sae4e</h1>;
  let value = 2 * 3;
  let styles={
    color:'red',
    fontSize:"20px"
  }
  return (
    <div>
      <h1 style={styles}>به سایت لیلی‌‌‌‌پز خیلی خوش آمدید</h1>
      <h2>Hello</h2>
      <h3>{sample}</h3>
      <h3>{name}</h3>
      <h1>{value}</h1>
    </div>
  );
};
    
export default Test;

