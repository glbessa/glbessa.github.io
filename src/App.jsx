import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Load static pages modules (lazy loaded for code splitting)
const postPages = import.meta.glob('./pages/posts/*.jsx');
const projectPages = import.meta.glob('./pages/projects/*.jsx');

const LazyPage = ({ importer }) => {
  const Component = React.lazy(importer);
  return (
    <Suspense fallback={<div className="text-center py-20 text-slate-500 font-medium">Carregando...</div>}>
      <Component />
    </Suspense>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Generated Post Routes */}
          {Object.entries(postPages).map(([path, importer]) => {
            const slug = path.split('/').pop().replace('.jsx', '');
            return <Route key={`post-${slug}`} path={`/posts/${slug}`} element={<LazyPage importer={importer} />} />
          })}

          {/* Generated Project Routes */}
          {Object.entries(projectPages).map(([path, importer]) => {
            const slug = path.split('/').pop().replace('.jsx', '');
            return <Route key={`project-${slug}`} path={`/projects/${slug}`} element={<LazyPage importer={importer} />} />
          })}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
