"use client"
import MainHeader from '@/components/headers/MainHeader';
import background from '../../../public/assets/background.png';
import Footer from '@/components/headers/Footer';
// import '../../../debug.css' For debugging purposes




export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div style={{
          
          backgroundImage: `url("${background.src}")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',

      }}>
        
        <MainHeader/>
        {children}
        
        <Footer/>
        </div>
      
        
    )
  }

