import { JSX } from "react";

interface InfoCardProps {
    icon?: JSX.Element;
    label: string;
    buttonText: string;
}

export default function InfoCard({ icon, label, buttonText }: InfoCardProps) {
    return (
        <div>
            <div
                className="w-40 h-36 bg-black text-white border border-green-500 rounded-lg flex flex-col overflow-hidden">
                {/* Horní část: obrázek/ikona */}
                <div className="flex-2 bg-black flex flex-col items-center justify-center p-4">
                    <div className="text-4xl text-green-400">{icon}</div>
                    <p className="text-center text-base font-semibold mt-2">{label}</p>
                    {/* Ikona "info" vpravo nahoře */}
                </div>


            </div>
            {/* Spodní část: tlačítko/text */}
            <div className="w-40 h-10 mt-2 bg-black border-green-500 flex-1 flex items-center justify-center rounded-lg">
                <p className="text-green-500 font-semibold text-sm">{buttonText}</p>
            </div>
        </div>
    );
}
