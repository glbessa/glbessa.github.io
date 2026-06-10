import React from 'react';
import { getData } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const data = getData();
  const { footer, author } = data;
  const { contactInfo } = author;

  return (
    <footer className="bg-bg border-t border-border pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand to-accent font-sora">
              glbessa.dev
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-text mb-4 font-sora">Serviços</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              {footer.services.map((service, index) => (
                <li key={index}><a href={service.url} className="hover:text-accent transition-colors">{service.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text mb-4 font-sora">Empresa</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              {footer.company.map((link, index) => (
                <li key={index}><a href={link.url} className="hover:text-accent transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text mb-4 font-sora">Conecte-se</h4>
            <div className="flex gap-4">
              <a 
                href={contactInfo.github.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted hover:text-text hover:bg-surface-hi border border-border transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.linkedin.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted hover:text-text hover:bg-surface-hi border border-border transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-text-muted hover:text-text hover:bg-surface-hi border border-border transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} glbessa.dev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
