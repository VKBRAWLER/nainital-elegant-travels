import './globals.css'
import Header from '@components/Header'
import Footer from '@components/Footer';
import SlideShow from "@components/SlideShow";

export const metadata = {
  title: 'Nainital Elegant Travels | Cab Services & Tourism',
  description: 'Nainital Elegant Travel is a company that provides taxi services and tourism. We offer reliable and comfortable transportation options for both local and outstation travel. Our experienced drivers ensure a safe and enjoyable journey, while our knowledgeable guides provide insightful information about the various tourist attractions in and around Nainital. Whether you need a taxi for sightseeing, airport transfers, or weekend getaways, Nainital Elegant Travel is your go-to choice for a hassle-free travel experience.',
  keywords: ['Nainital Elegant Travels',
    'Elegant Travels',
    'Cab Services',
    'Tourism',
    'bhimtal',
    'naukuchiatal',
    'Nainital',
    'Sattal',
    'Almora',
    'Ranikhet',
    'Kasardevi',
    'kainchi dham',
    'Rishikesh',
    'Masoorie',
    'Tour You Can Travel',
    'Cost-Effective',
    'Safety',
    'Time-Saving',
    'Convenience',
    'Ride-Hailing Services',
    'Most Common Destination',
    'Dehradun',
    'Delhi',
    'Haldwani',
    'Kausani',
    'Munsiari',
    'Taxi Services',
    'Transportation',
    'Local Travel',
    'Outstation Travel',
    'Experienced Drivers',
    'Safe Journey',
    'Knowledgeable Guides',
    'Tourist Attractions',
    'Sightseeing',
    'Airport Transfers',
    'Weekend Getaways',
    'Hassle-free Travel'
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords.join(',')} />
        <link rel="stylesheet" href="./globals.css" />
      </head>
      <body className='flex flex-col items-center bg-[var(--CT01)]'>
        <Header />
        <SlideShow image={["/img/slide_show/ad1.jpg", "/img/slide_show/ad2.jpg"]} />
        {children}
        <Footer />
      </body>
    </html>
  )
}