import InvestigationWrapper from "@/components/investigationWrapper";

export default function Page() {
  return (
    <div className="d-block font-mpluscode w-full py-8 md:py-14 lg:py-14">
      <div className="text-2xl leading-10	tracking-tight md:text-4xl lg:text-4xl text-center text-default-color font-mpluscode pb-6 md:pb-9 lg:pb-9">
        Prophet AI for Security Operations
      </div>
      <InvestigationWrapper />
    </div>
  );
}
