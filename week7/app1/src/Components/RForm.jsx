import React, { useState } from "react";


function ReactForm() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const [branch, setBranch] = useState('');
  const [submittedBranch, setSubmittedBranch] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name); // Save input to display
    setSubmittedBranch(branch);
    setName(''); // Clear input
    setBranch(''); // Clear input
  };
 return (
    <div style={styles.container}>
        <div style={styles.box}>
        <h2>Simple Form</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <br />

            <input
            type="text"
            placeholder="Enter Branch"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
        {submittedName && <p>Submitted Name: {submittedName}</p>}
        {submittedBranch && <p>Submitted Branch: {submittedBranch}</p>}
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

export default ReactForm;


