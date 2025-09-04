// src/layouts/AdminLayout.tsx
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function AdminLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="/admin/products" className="block p-2 hover:bg-gray-200">
                Productos
              </a>
            </li>
            <li>
              <a href="/admin/orders" className="block p-2 hover:bg-gray-200">
                Pedidos
              </a>
            </li>
            <li>
              <a href="/admin/settings" className="block p-2 hover:bg-gray-200">
                Configuración
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4">Panel de administración</header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
