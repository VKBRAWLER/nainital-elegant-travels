import './globals.css'
import Header from '@components/Header'
import SlideShow from "@components/SlideShow";
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col items-center bg-[var(--CT01)]'>
        <Header />
        <SlideShow image={["./img/i2.png", "./img/i3.png"]}/>
        {children}
      </body>
    </html>
  )
}
