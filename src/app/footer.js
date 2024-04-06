import Image from "next/image";

export default function Footer() {
  return (
    <div
      className="banner"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5a2d24",
        borderRadius: 20,
        padding: 20,
      }}
    >
      <center>
        <p style={{ color: "#c8ad90", fontSize: 18, marginBottom: 10 }}>
          Feel free to contact me at :
        </p>
        <p style={{ color: "#c8ad90", color: "#c8ad90" }}>
          <a href="mailto:info@aditi-gupta.co.in">info@aditi-gupta.co.in</a>
        </p>
      </center>
    </div>
  );
}
