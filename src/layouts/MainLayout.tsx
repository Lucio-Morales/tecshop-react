import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar */}
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      {/* Footer */}
    </div>
  );
}
