import LibraryHeader from "@/components/library/LibraryHeader";
import FeaturedExtraction from "@/components/library/FeaturedExtraction";
import OutputRegistry from "@/components/library/OutputRegistry";
import CuratedMatrix from "@/components/library/CuratedMatrix";
import SourceLineageTable from "@/components/library/SourceLineageTable";

export default function Page() {
  return (
    <div className="flex flex-col w-full gap-y-space-xl">
      <LibraryHeader />
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
        <FeaturedExtraction />
        <OutputRegistry />
      </section>
      <CuratedMatrix />
      <SourceLineageTable />
    </div>
  );
}