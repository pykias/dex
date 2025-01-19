import { JSX } from "react";

interface TallCardProps {
    icon?: JSX.Element;
    title: string;
    items: { label: string; value: string }[];
    buttons: { icon: JSX.Element }[];
}

export default function TallCard({ icon, title, items, buttons }: TallCardProps) {
    return (
        <div className="w-48 h-96 bg-black text-white border border-green-500 rounded flex flex-col p-4">
            {/* Horní část: Ikona a titulek */}
            <div className="flex flex-col items-center mb-4">
                <div className="text-4xl mb-2">{icon}</div>
                <h3 className="text-lg font-bold">{title}</h3>
            </div>

            {/* Střední část: Informace */}
            <div className="flex-1">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm my-1">
                        <span>{item.label}:</span>
                        <span className="font-bold">{item.value}</span>
                    </div>
                ))}
            </div>

            {/* Spodní část: Tlačítka */}
            <div className="grid grid-cols-3 gap-2 mt-4">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className="flex items-center justify-center bg-green-500 rounded p-2 hover:bg-green-600"
                    >
                        {button.icon}
                    </button>
                ))}
            </div>
        </div>
    );
}
