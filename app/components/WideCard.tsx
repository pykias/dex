import { JSX } from "react";

interface WideCardProps {
    icon?: JSX.Element;
    label: string;
}

export default function WideCard({ icon, label }: WideCardProps) {
    return (
        <div
            className="w-80 h-36 bg-black text-white border border-green-500 rounded-lg flex flex-col overflow-hidden"
        >
            <div className="flex-2 flex flex-col items-center justify-center p-4 relative bg-black ">
                <div className="text-green-400 text-4xl">{icon || "Icon"}</div>
                <p className="text-center text-white font-semibold mt-2">{label}</p>
               
            </div>
        </div>
    );
}
