export default function AboutBanner() {
  return (
    <div
      id="about"
      className="banner"
      style={{
        backgroundColor: "#ff91a4",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 200px)",
        display: "flex",
        alignItems: "center",
        paddingBottom: 80,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src="static/brownie.svg"
          style={{ width: "100%", maxWidth: 300, marginBottom: 50 }}
        />
        <h1
          style={{
            fontSize: 50,
            margin: 0,
            lineHeight: 1,
            fontWeight: 700,
            textAlign: "left",
            marginBottom: 40,
          }}
        >
          About Me
        </h1>

        <p style={{ marginTop: 20, textAlign: "left", marginBottom: 80 }}>
          I am pursuing Mechanical Engineering as already told, however I am
          passionate in a range of stuff, ranging from academics to art.
          <br></br>
          <br></br>I have been involved in programming for started and even
          created a number of API's for various projects using my skills. Not
          only this, I have even been working on a research paper on online
          gaming.
          <br></br>
          <br></br>I have been involved in a number of Non-Tech activities as
          well, such as I was a part of the Organising Team of my colleges
          annual fest as a part of the Sponsorship Department, I really created
          long lasting relationships with the brands I interacted with during
          the same.
          <br></br>
          <br></br>
          Coming to the real stuff, I love painting and dancing. Like these are
          for me the best utilization of time and believe me you wouldn't want
          to challenge me in any.
          <br></br>
          <br></br>
          PS - I love brownie-ice-cream and chalks 😋
        </p>
      </div>
      {/* <div
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      > */}
      {/* <img
          src="static/serious_avatar.svg"
          style={{ width: "100%", padding: 100 }}
        /> */}
      {/* </div> */}
    </div>
  );
}
