import React from 'react';

const CraftDisplay: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">工艺制作展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/images/img_v3_02kl_ccf358e1-7bb2-4318-a81a-15d5266a76fg@2x.png" alt="工艺制作1" className="w-full h-80 object-cover" />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src="/images/img_v3_02kl_aae11f0f-6193-4d26-b2f0-78afc82b69dg_3@2x.png" alt="工艺制作2" className="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftDisplay;