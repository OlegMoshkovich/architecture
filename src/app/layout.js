import Head from 'next/head';
import './globals.css'; // Your custom global styles

export const metadata = {
  title: 'Important Buildings',
  description: 'Created by AnalogFuture.xyz',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
