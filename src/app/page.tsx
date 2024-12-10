import {
  Award,
  Certificate,
  Footer,
  Header,
  InfiniteScroll,
  Service,
  Slider,
} from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <div className=" font-[family-name:var(--font-bar)]">
        <Slider />
        <Service />
        <Certificate />
        <Award />
        <InfiniteScroll />
      </div>
      <Footer />
    </>
  );
}
