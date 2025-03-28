import React from 'react';

const WorksShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">作品展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 作品项 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <img src="/images/图层 13 拷贝 2@2x.png" alt="作品1" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">插画设计</h3>
              <p className="text-gray-600">创意插画设计作品展示</p>
              <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">查看更多</a>
            </div>
          </div>
          {/* 作品项 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <img src="/images/图层 13 拷贝 2@2x(1).png" alt="作品2" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">角色设计</h3>
              <p className="text-gray-600">原创角色设计与开发</p>
              <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">查看更多</a>
            </div>
          </div>
          {/* 作品项 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <img src="/images/图层 13 拷贝 2@2x(2).png" alt="作品3" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">概念艺术</h3>
              <p className="text-gray-600">视觉概念艺术创作</p>
              <a href="#" className="inline-block mt-4 text-blue-600 hover:underline">查看更多</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksShowcase;