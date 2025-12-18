import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Commerce OS",
  description: "AI agents that automate e-commerce operations",
  icons: {
    icon: "/fort-wise-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script id="chat-widget-config" strategy="afterInteractive">
          {`
            window.ChatWidgetConfig = {
              key: 'client',
              botId: '16',
              webhook: {
                url: 'https://admin-panel-server-3be3d9c3a642.herokuapp.com',
                route: 'webhooks/web'
              },
              style: {
                theme: 'dark',
                position: 'right'
              },
              features: {
                autoOpen: false,
                showTypingIndicator: true,
                enableNotifications: true,
                lazyLoad: false,
                lazyLoadDelay: 1000,
                typingTimeout: 30000
              },
              messages: {
                greeting: 'Hello! How can I help you today?',
                placeholder: 'Type your message...',
                errorMessage: 'Sorry, there was a connection error. Please try again later.',
                typingText: 'Assistant is typing...',
                typingTimeoutMessage: 'The response is taking longer than expected. Please try again.'
              },
              socials: {
                instagram: '',
                facebook: '',
                telegram: '',
                whatsapp: ''
              }
            };
          `}
        </Script>
        <Script
          src="https://react-chat-widget-rosy.vercel.app/loader.iife.js"
          strategy="afterInteractive"
          data-key="client"
        />
      </body>
    </html>
  );
}
