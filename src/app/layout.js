import { ThemeProvider } from '../context/ThemeContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import './globals.css';
// import StoreProvider from './storeProvider';


export const metadata = {
  title: 'Green Store',
  description: 'Generated by create next app',
  icons: {
    icon: '/assets/images/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    // <StoreProvider>
    <html lang="fr" suppressHydrationWarning={true}>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300"  cz-shortcut-listen="true" > 
        <ThemeProvider> 
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
    // </StoreProvider>

  );
}
