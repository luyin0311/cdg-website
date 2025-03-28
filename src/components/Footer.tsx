import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src="/images/logo_圆角@2x.png" alt="CDG Logo" className="h-12 mb-4" />
            <p>Comme Des Génie - 创意无限</p>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:text-gray-300">关于我们</a>
            <a href="#" className="hover:text-gray-300">联系方式</a>
            <a href="#" className="hover:text-gray-300">隐私政策</a>
          </div>
          <div>
            <p className="mb-2">关注我们的社交媒体</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <img src="/images/组 17@2x.png" alt="社交媒体" className="h-8" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img src="/images/组 9@2x.png" alt="社交媒体" className="h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>© 2023 Comme Des Génie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;