import Head from 'next/head';
import './globals.css'; // Your custom global styles

export const metadata = {
  title: "Cool buildings",
  description: "..enough said",
  openGraph: {
    title: "Cool buildings",
    description: "created by Analog Future",
    url: "https://coolbuildings.xyz",
    images: [
      {
        url: "https://coolbuildings.xyz/images/social-preview.png", // Use the full URL
        width: 1200,
        height: 630,
        alt: "Social Preview Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cool Buildings",
    description: "A subjective list of cool buildings",
    images: [
      {
        url: "https://coolbuildings.xyz/images/social-preview.png", // Use the full URL
        alt: "Social Preview Image",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <meta property="og:title" content="Cool Buildings" />
        <meta property="og:description" content="Created by AnalogFuture.xyz" />
        <meta property="og:image" content="https://coolbuildings.xyz/images/social-preview.png" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Cool Buildings" />
        <meta property="twitter:description" content="Created by AnalogFuture.xyz" />
        <meta property="twitter:image" content="https://coolbuildings.xyz/images/social-preview.png" />
      </Head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
