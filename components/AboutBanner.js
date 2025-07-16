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
         Hi, I’m Aditi Gupta, a B.Tech. student at NSUT Delhi, currently heading into my 7th semester in August 2025.
<br></br><br></br>
Though I come from a Mechanical Engineering background, I’ve always had a creative lens — I see shapes in numbers and stories in data. My journey into business and research began as early as Grade 11, when I won a national-level E-Summit, sparking my fascination with how the world works, the root of real-world problems, and ideating solutions that matter.
<br></br><br></br>
At NSUT, I wear many hats. I currently serve as the Director of Nalum, our university’s alumni platform, where I lead product and analytics strategy for 10K+ users. I’m also the Vice President at Enactus NSUT, where we build sustainable ventures for social impact, and previously led as the Head of Collaborations at Moksha-Innovision, managing ₹50L+ in sponsorships.
<br></br><br></br>
Beyond academics and leadership, I’m also a digital content creator, having collaborated with 50+ brands across lifestyle and fashion — blending storytelling with authenticity.
<br></br><br></br>
I'm passionate about data, design thinking, and driving initiatives that create meaningful change — whether through a dashboard, a social project, or a reel.
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
