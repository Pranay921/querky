import React from "react";

export default function GridLayout2() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-2 h-[550px]">

      {/* DIV 1 */}
      <div
        className="
          col-span-2 row-span-4 
          bg-cover bg-center 
          relative
        "
        style={{ backgroundImage: "url('/src/assets/hero/hero1.jpg')" }}
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <h2 className="font-['Dancing_Script'] font-extrabold text-5xl">Women's Fashion</h2>
          <p className="text-lg mt-2">Weekend vibes mean shopping bags and big smiles!</p>
        </div>
      </div>

      {/* DIV 2 */}
      <div
        className="
          row-span-2 col-start-3
          bg-cover bg-center 
          relative
        "
        style={{ backgroundImage: "url('/src/assets/hero/hero2.jpg')" }}
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <h2 className="font-['Dancing_Script'] font-extrabold text-2xl">Men's Fashion</h2>
          <p className="text-base mt-2">358 Items</p>
        </div>
      </div>

      {/* DIV 3 */}
      <div
        className="
          relative
          row-span-2 col-start-3 row-start-3
          bg-pink-100
          overflow-hidden
        "
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <h2 className="font-['Dancing_Script'] font-extrabold text-2xl">Cosmetics</h2>
          <p className="text-base mt-2">159 Items</p>
        </div>

        <img
          src="/src/assets/hero/hero3.png"
          alt="model"
          className="absolute right-0 bottom-0 h-full object-contain pointer-events-none"
        />
      </div>

      {/* DIV 4 */}
      <div
        className="
          relative
          row-span-2 col-start-4 row-start-1
          bg-purple-300
          overflow-hidden
        "
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <h2 className="font-['Dancing_Script'] font-extrabold text-2xl">Kid's Fashion</h2>
          <p className="text-base mt-2">273 Items</p>
        </div>

        <img
          src="/src/assets/hero/hero4.png"
          alt="model"
          className="absolute right-0 bottom-0 h-full object-contain pointer-events-none"
        />
      </div>

      {/* DIV 5 */}
      <div
        className="
          relative
          row-span-2 col-start-4 row-start-3
          bg-blue-200
          overflow-hidden
        "
      >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          <h2 className="font-['Dancing_Script'] font-extrabold text-2xl">Accessories</h2>
          <p className="text-base mt-2">792 Items</p>
        </div>

        <img
          src="/src/assets/hero/hero5.png"
          alt="model"
          className="absolute right-0 bottom-0 h-full object-contain pointer-events-none"
        />
      </div>

    </div>
  );
}
