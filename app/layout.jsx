import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
    title: 'Authentication',
    description: 'Google Authentication with Next-Auth',
    keyword:'google, auth, next-auth, authentication',
}

const layout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
       <body>
         <Navbar/>
        <main>{children}</main>
       </body>
      </html>
    </AuthProvider>
  )
}

export default layout