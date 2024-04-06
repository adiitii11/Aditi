import Image from "next/image";

export default function About() {
  return (
    <div
      id="about"
      className="banner"
      style={{
        minHeight: "calc(100vh)",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="about-banner"
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/about.png"
          height={600}
          width={600}
          style={{ borderRadius: 50, border: "10px solid #5a2d24" }}
        />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 600 }}>
          <center>
            <h1 style={{ fontWeight: "bold", fontSize: 35 }}>About Me!</h1>
            <br></br>
            <br></br>
            <p style={{ fontSize: 18 }}>
              As told before I&apos;m Aditi, a sophomore at NSUT. My journey
              into engineering stems from a profound curiosity about the inner
              workings of our world. Machines, with their intricate
              complexities, have always captivated me, and my pursuit of
              mechanical engineering allows me to delve into this passion.
            </p>
            <br></br>
            <p style={{ fontSize: 18 }}>
              Besides my academic pursuits, I&apos;m equally passionate about
              the arts and fashion. Dance and painting are not just hobbies;
              they are essential outlets that harmonize with my analytical
              engineering mindset. Additionally, fashion fuels my creativity and
              self-expression. Dance&apos;s grace and fluidity, painting&apos;s
              expressiveness and imagination, and fashion&apos;s style and
              trends resonate with my soul.
            </p>
          </center>
        </div>
      </div>
    </div>
  );
}
