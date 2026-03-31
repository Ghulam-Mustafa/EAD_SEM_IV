import React, { useState } from "react";

function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const checkStrength = (pwd) => {
    const veryStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const medium = /^(?=.*[a-z])(?=.*\d).{6,}$/;
    const weak = /^.{4,}$/;

    if (veryStrong.test(pwd)) return "Very Strong";
    if (strong.test(pwd)) return "Strong";
    if (medium.test(pwd)) return "Medium";
    if (weak.test(pwd)) return "Weak";
    return "Very Weak";
  };

  // 🎨 Color mapping
  const getColor = (strength) => {
    if (strength.includes("Very Strong")) return "green";
    if (strength.includes("Strong")) return "orange";
    if (strength.includes("Medium")) return "gold"; // yellow
    if (strength.includes("Weak")) return "red";
    return "red";
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial" }}>
          <h3>160124737177</h3>
          <h2>Password Strength Checker (Regex)</h2>

          <input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />

          {password && (
            <p>
              Strength:{" "}
              <strong style={{ color: getColor(strength) }}>
                {strength}
              </strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  box: {
    textAlign: "center",
  },
};

export default PasswordStrengthChecker;