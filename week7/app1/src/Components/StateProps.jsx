import React, { useState } from "react";

function Sports(props) {
  return <h3>I am a {props.spt} player</h3>;
}

function Hobby() {
  const [sptName, setSportName] = useState("Football");


  return (
    <div style={styles.container}>
        <div style={styles.box}>
        <h3>160124737177</h3>
        <h2>My Hobby</h2>

        <Sports spt={sptName} />

        <button onClick={() => setSportName("Basketball")}>Change Sports</button>
        <button onClick={() => setSportName("Football")}>default</button>
        </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",  // horizontal center
    alignItems: "center",      // vertical center
    height: "100vh",           // full screen height
  },
  box: {
    textAlign: "center",
  },
};


export default Hobby;