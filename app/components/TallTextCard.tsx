
interface TallTextCardProps {
    text: string;
}

export default function TallTextCard({ text }: TallTextCardProps) {
    return (
        <div
            className="w-80 h-[24rem] bg-black text-white border border-green-500 rounded-lg flex items-center justify-center p-4"
        >
            <p className="text-sm text-center">{text}</p>
        </div>
    );
}
