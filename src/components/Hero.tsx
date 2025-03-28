import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-8 md:py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img src="/images/Comme Des Génie @2x.png" alt="Comme Des Génie" className="w-full max-w-md mx-auto" />
          <p className="text-gray-600 mt-6 max-w-md mx-auto">IT作品集</p>
        </div>
        <div className="md:w-1/2 relative">
          <img src="/images/img_v3_02kl_a5dd93cb-4e93-41b9-b397-a4b750573beg@2x.png" alt="Hero Image" className="w-full rounded-lg shadow-xl" />
          <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded shadow-md">
            <img src="/images/图层 30@2x.png" alt="Design Tool" className="h-8 w-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;