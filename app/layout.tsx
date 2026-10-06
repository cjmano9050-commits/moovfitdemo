import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MOOV FIT PRO — Treino inteligente. Resultado real.',
  description:
    'Moov Fit Pro — academia de eletroestimulação. 25 minutos de treino, tecnologia e performance.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
