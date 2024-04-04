"use client"
import MainHeader from '@/components/headers/MainHeader';
import background from '../../../public/assets/background.png';
import Footer from '@/components/headers/Footer';
<<<<<<< HEAD
// import '../../../debug.css' For debugging purposes
=======
import { TextColorModeProvider } from '@/hooks/TextColorModeContext';

import {ChatProvider, ChatManager} from '@/components/chat/ChatContext';

>>>>>>> 7c8f7315593bd6374a3a9e6573066531c6b7bd92




export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <TextColorModeProvider>
        <ChatProvider>
        <div style={{
          
          backgroundImage: `url("${background.src}")`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',

      }}>
        
        <MainHeader/>
        {children}
        <ChatManager/>
        <Footer/>
        </div>
      </ChatProvider>
      </TextColorModeProvider>
        
    )
  }

