import Sidebar from "@/app/components/Sidebar";
import SquareCard from "@/app/components/SquareCard";
import InfoCard from "@/app/components/InfoCard";
import WideCard from "@/app/components/WideCard";
import TallCard from "@/app/components/TallCard";
import WideGraphCard from "@/app/components/WideGraphCard";
import TallTextCard from "@/app/components/TallTextCard";


export default function Page1() {
    return (
        <Sidebar>
            {/* Horni cast (1/4 stranky) */}
            <div className="flex-none h-1/6"></div>

            {/* PRostredni cast */}
            <div className="flex flex-wrap gap-4 justify-start items-start">
                {/* SquareCard */}
                <SquareCard label="Quain"/>

                {/* InfoCardy vedle SquareCard */}
                <InfoCard label="Token Label" buttonText="MEMECOIN"/>
                <InfoCard label="Bundle Checker" buttonText="NOT BUNDLED"/>
                <InfoCard label="Contract Checker" buttonText="CA MATCHES"/>
                <InfoCard label="Rug Score" buttonText="3/10"/>
                <InfoCard label="Twitter Reuse" buttonText="YES - 3 TIMES"/>

                {/* WideCard podlouhla*/}
                <WideCard label={"Summarization"}/>
                <TallCard buttons={[]} title={'QUAIN'} items={[
                    {label: "Ticker", value: "QUAIN"},
                    {label: "Market cap", value: "135 000$"},
                    {label: "Holders", value: "214"},
                    {label: "Dex status", value: "PAID"},
                ]}/>
                    <WideGraphCard placeholderText="Chart Placeholder"/>
                    <TallTextCard text='Solana is a high-performance blockchain platform designed for decentralized applications (dApps) and crypto projects. It aims to provide scalability, speed, and low-cost transactions while maintaining security and decentralization.'/>
            </div>

            {/* Spoidni cast (1/4 stranky) */}
            <div className="flex-none h-1/6"></div>
        </Sidebar>
    );
}
