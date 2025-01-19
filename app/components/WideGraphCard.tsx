
interface WideGraphCardProps {
    placeholderText?: string;
}

export default function WideGraphCard({ placeholderText = "Graph Placeholder" }: WideGraphCardProps) {
    return (
        <div className="w-[54rem] h-96 bg-black text-white border border-green-500 rounded-lg flex items-center justify-center">
            {/* Placeholder pro graf */}
            <p className="text-gray-500 text-2xl">{placeholderText}</p>
        </div>
    );
}
