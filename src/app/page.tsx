import {
  Award,
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
      <InfiniteScroll />
    </div>
  );
}
