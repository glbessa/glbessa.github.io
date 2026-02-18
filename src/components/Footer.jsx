import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              glbessa.dev
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Engenharia de software estratégica para negócios que buscam alta performance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Desenvolvimento SaaS</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Data Pipelines</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">DevOps & Cloud</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Automação com IA</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Projetos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              <a href="https://github.com/glbessa" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/glbessa" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contato@glbessa.dev" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Gabriel Bessa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
