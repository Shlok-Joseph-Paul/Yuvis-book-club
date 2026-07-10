import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import BookDetailPage from './pages/BookDetailPage';
import Books from './pages/Books';
import Home from './pages/Home';
import Photos from './pages/Photos';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-parchment text-ink">
      <Navbar />
      <main key={location.pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:bookId" element={<BookDetailPage />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
