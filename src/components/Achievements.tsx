import React from 'react';

const Achievements: React.FC = () => {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">2023年度成就</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <img src="/images/图层 13 拷贝 2@2x(3).png" alt="成就1" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="font-semibold">最佳设计奖</p>
          </div>
          <div>
            <img src="/images/图层 13 拷贝 2@2x(4).png" alt="成就2" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="font-semibold">创新艺术奖</p>
          </div>
          <div>
            <img src="/images/图层 13 拷贝 2@2x(5).png" alt="成就3" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="font-semibold">数字艺术奖</p>
          </div>
          <div>
            <img src="/images/图层 13 拷贝 2@2x(6).png" alt="成就4" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="font-semibold">年度艺术家</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;