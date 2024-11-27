import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Subscriptions } from './pages/Subscriptions';

export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Sidebar />
        <main className="ml-64 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}