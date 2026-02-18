import React from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquare } from 'lucide-react';

const AIChatButton = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="absolute -top-12 right-0 bg-white text-slate-900 px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Fale com meu Agente IA
        <div className="absolute bottom-[-4px] right-4 w-2 h-2 bg-white rotate-45"></div>
      </div>
      
      <button 
        onClick={() => window.open('https://chat.openai.com/g/g-your-custom-gpt-id', '_blank')} // Replace with your actual Custom GPT link or generic contact
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full shadow-lg shadow-blue-500/30 hover:scale-110 transition-transform duration-300"
      >
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-20"></div>
        <Bot className="w-7 h-7 text-white" />
      </button>
    </motion.div>
  );
};

export default AIChatButton;
