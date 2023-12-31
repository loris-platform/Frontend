import './globals.css'
import Provider from './components/Provider'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <div className="mainContainer">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  )
}
