import { pageMeta } from "@/app/seo";
import JsonLd from "@/components/JsonLd";
import { segmentGraph } from "@/app/structured-data";
import SegmentPage from "@/components/SegmentPage";
import { SEGMENTS } from "@/components/segments";

const segment = SEGMENTS["buro"];

export const metadata = pageMeta({
  title: segment.metaTitle,
  description: segment.metaDescription,
  path: "/for/buro",
});

export default function Page() {
  return (
    <>
      <JsonLd data={segmentGraph("buro")} />
      <SegmentPage segment={segment} />
    </>
  );
}
