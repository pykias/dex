import { JSX } from "react";

interface SquareCardProps {
    icon?: JSX.Element;
    label?: string;
}

export default function SquareCard({ icon, label }: SquareCardProps) {
    return (
        <div className="w-48 h-48 bg-black text-white border border-green-500 rounded flex flex-col items-center justify-center">
            <div className="text-4xl mb-4">{icon}</div>
            <p className="text-center text-lg">{label}</p>
        </div>
    );
}
