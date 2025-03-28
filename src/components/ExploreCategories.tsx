import React from 'react';

const ExploreCategories: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">探索作品分类</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md text-center p-6">
            <img src="/images/cat2@2x.png" alt="插画" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-semibold">插画</h3>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md text-center p-6">
            <img src="/images/cat4@2x.png" alt="角色" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-semibold">角色</h3>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md text-center p-6">
            <img src="/images/cat6@2x.png" alt="场景" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-semibold">场景</h3>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md text-center p-6">
            <img src="/images/图层 47@2x.png" alt="概念" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="font-semibold">概念</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;