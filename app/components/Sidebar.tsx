'use client'
import React, { useState } from "react";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col sm:flex-row">
      {/* Hamburger Menu (pro mobilní zařízení) */}
      <div className="bg-gray-800 p-4 sm:hidden flex justify-between items-center">
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Fullscreen Sidebar (pouze pro mobilní zařízení) */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 z-50 flex flex-col p-4">
          <div className="flex justify-between items-center mb-8">
            <img src="/logo.png" alt="Logo" className="w-12 h-12" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl"
            >
              ✕
            </button>
          </div>
          <nav>
            <ul className="space-y-4">
              <li>
                <button className="w-full text-left text-white">Twitter Reuse</button>
              </li>
              <li>
                <button className="w-full text-left text-white">Dex Updates</button>
              </li>
              <li>
                <button className="w-full text-left text-white">KOTH</button>
              </li>
              <li>
                <button className="w-full text-left text-white">Migrated</button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sidebar pro větší obrazovky */}
      <aside className="hidden sm:block w-1/6 bg-gray-800 p-4 border-green-500">
        <div className="mb-8">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 mx-auto" />
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <button className="w-full text-left text-white">Twitter Reuse</button>
            </li>
            <li>
              <button className="w-full text-left text-white">Dex Updates</button>
            </li>
            <li>
              <button className="w-full text-left text-white">KOTH</button>
            </li>
            <li>
              <button className="w-full text-left text-white">Migrated</button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Hlavní obsah */}
      <main className="flex-1 bg-gray-900 p-8">{children}</main>
    </div>
  );
}
