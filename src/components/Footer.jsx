import React from 'react';
import { getData } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const data = getData();
  const { footer, author } = data;
  const { contactInfo } = author;

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              glbessa.dev
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              {footer.services.map((service, index) => (
                <li key={index}><a href={service.url} className="hover:text-blue-400 transition-colors">{service.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              {footer.company.map((link, index) => (
                <li key={index}><a href={link.url} className="hover:text-blue-400 transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-200 mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              <a href={contactInfo.github.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={contactInfo.linkedin.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${contactInfo.email}`} className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {author.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
