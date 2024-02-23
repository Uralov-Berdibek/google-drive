import ModalProvider from '@/components/providers/modal-provider'
import SubscriptionProvider from '@/components/providers/subscription-provider'
import { ThemeProvider } from '@/components/providers/theme-providers'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Google drive',
	description: 'Google drive clone built with Next.js and Tailwind CSS',
	icons: { icon: '/logo.svg' },
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body className={inter.className}>
					<ThemeProvider
						attribute='class'
						defaultTheme='system'
						enableSystem
						disableTransitionOnChange
						storageKey='google-drive'
					>
						<Toaster position='top-center' />
						<ModalProvider />
						<SubscriptionProvider>{children}</SubscriptionProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	)
}
