import "@/assets/styles/globals.css";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata = {
  tilte: "Property-pulse|find the perfect rental",
  description: "find your dream rental property",
  keywords: "find rental,rental houses,rental apartments",
};
export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main> {children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
