import {useRef, useState, useEffect} from 'react';
import Snack from './snack';
import logo from './assets/lyra.svg';

function App() {
  const r = useRef(null);

  return (
    <div className="bg-slate-800 text-white">
      <div className="container mx-auto font-sans p-3 ">
        <div className="flex m-b-3">
          <div className="grow-1 md:basis-1/5 basis-1/2">
            <img src={logo} className="h-60px" />
          </div>
          <div className="grow-6 md:basis-3/5 basis-1/2 leading-none flex flex-row md:justify-center justify-end">
            <div className="flex flex-col justify-center">
              <div className="text-4xl">Lyra Demo ✨</div>
            </div>
          </div>
          <div className="grow-1 md:basis-1/5 basis-0"></div>
        </div>
        {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="p-8">Lyra Demo</div>
        </div> */}
        <Snack />
        <div className="flex flex-row-reverse">
          <div className="flex-none">
            Click on the various platforms to see all of the magic 👆
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
