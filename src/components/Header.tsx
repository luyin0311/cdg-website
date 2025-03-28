import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img src="/images/CDG@2x.png" alt="CDG Logo" className="h-8" />
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-600">首页</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">作品</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">关于</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">联系</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-gray-800 hover:text-gray-600">登录</Link>
          <a href="#" className="text-gray-800 hover:text-gray-600">注册</a>
        </div>
      </div>
    </header>
  );
};

export default Header;