import { Inter , Outfit} from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton} from '@clerk/nextjs'

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "SHAREME",
  description: "Shareme: File sharing app",
  
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
        <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/>
        </head>
      
        
        <body className={inter.className}>
        
          {children}
          
          </body>
          
    </html>
    </ClerkProvider>
    
    
  );
}
