import Sidebar from "@/app/components/Sidebar";
import WideCard from '@/app/components/WideCard';



export default function Page1() {
  return (
    <Sidebar>
      {/* Horni cast (1/4 stranky) */}
      <div className="flex-none h-1/6"></div>

      {/* PRostredni cast */}
      <div className="flex flex-wrap gap-4 justify-start items-start">
        <WideCard label={"Summarization"}/>
        <WideCard label={"Summarization"}/>
        <WideCard label={"Summarization"}/>
        <WideCard label={"Summarization"}/>
        <WideCard label={"Summarization"}/>
        <WideCard label={"Summarization"}/>
        <WideCard label={"Summarization"}/>
        <WideCard label={"Summarization"}/>
        <WideCard label={"Summarization"}/>
      </div>

      {/* Spoidni cast (1/6 stranky) */}
      <div className="flex-none h-1/6"></div>
    </Sidebar>
  );
}
