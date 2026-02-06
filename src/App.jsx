import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Projects from './pages/Projects';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:slug" element={<PostDetail type="posts" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<PostDetail type="projects" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
