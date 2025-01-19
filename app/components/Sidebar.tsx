interface SidebarProps {
    children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
    return (
        <div className="min-h-screen flex ">
            {/* Sidebar */}
            <aside className="w-1/6 rounded-3xl border-green-500 bg-gray-800 p-4">
                <div className="mb-8">
                    <img src="/logo.png" alt="Logo" className="w-16 h-16 mx-auto" />
                </div>
                <nav>
                    <ul className="space-y-4 ">
                        <li><button className="w-full text-left">Twitter Reuse</button></li>
                        <li><button className="w-full text-left">Dex Updates</button></li>
                        <li><button className="w-full text-left">KOTH</button></li>
                        <li><button className="w-full text-left">Migrated</button></li>
                    </ul>
                </nav>
            </aside>

            {/* Hlavní obsah */}
            <main className="flex-1 bg-gray-900 p-8">
                {children}
            </main>
        </div>
    );
}
