import ArticleTable from "@/components/articleTable";

export default function Page() {
  return (
    <div className="d-block font-poppins w-full py-8 md:py-14 lg:py-14">
      <div className="text-2xl leading-10	tracking-tight md:text-4xl lg:text-4xl text-center text-neutral-900 font-lora pb-6 md:pb-9 lg:pb-9">
        Top Wikipedia articles
      </div>
      <ArticleTable />
    </div>
  );
}
