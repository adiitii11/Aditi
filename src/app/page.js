import About from "./about";
import Art from "./art";
import Dance from "./dance";
import Footer from "./footer";
import Home from "./home";
import Line from "./line";
import Resume from "./resume";
import Projects from "./projects";

export default function Main() {
  return (
    <main>
      <Home></Home>
      <Line></Line>
      <About></About>
      <Line></Line>
      <Projects></Projects>
      <Line></Line>
      <Dance></Dance>
      <Line></Line>
      <Art></Art>
      <Line></Line>
      <Resume></Resume>
      <Footer></Footer>
    </main>
  );
}
