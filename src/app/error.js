"use client";

export default function Error({ error, reset }) {
  return (
    <div
      id="error"
      className="banner"
      style={{
        paddingTop: 100,
        width: "100%",
        paddingBottom: 80,
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          alignItems: "flex-end",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <img
          src="/static/serious_avatar.svg"
          style={{ width: "100%", maxWidth: 300 }}
        />
      </div>
      <div
        id="error-text"
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 100,
            margin: 0,
            lineHeight: 1,
            fontWeight: 700,
            textAlign: "left",
          }}
        >
          ERROR XXX
        </h1>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 400, marginTop: 20 }}>
          Some Error Occured
        </h2>
        <p style={{ marginTop: 20, textAlign: "left" }}>
          I will correct this ASAP.....
        </p>
      </div>
    </div>
  );
}
