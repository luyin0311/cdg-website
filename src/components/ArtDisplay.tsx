import React from 'react';

const ArtDisplay: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">艺术立体展示模块</h2>
            <p className="text-gray-600 mb-6">通过3D技术展示艺术作品的多维视角，让观众能够从不同角度欣赏作品的细节和质感。</p>
            <div className="flex space-x-4">
              <img src="/images/3D@2x.png" alt="3D" className="h-12" />
              <img src="/images/图层 31@2x.png" alt="VR" className="h-12" />
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="/images/图层 30 拷贝@2x.png" alt="3D展示1" className="rounded-lg shadow-md" />
            <img src="/images/图层 30 拷贝@2x(1).png" alt="3D展示2" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtDisplay;