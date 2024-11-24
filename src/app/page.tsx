import {
  Award,
  Book,
  Certificate,
  InfiniteScroll,
  Service,
  Slider,
} from "./components";

export default function Home() {
  return (
    <div className=" font-[family-name:var(--font-geist-mono)]">
      <Slider />
      <Service />
      <Certificate />
      <Award />
      <Book />
      <InfiniteScroll />
    </div>
  );
}
