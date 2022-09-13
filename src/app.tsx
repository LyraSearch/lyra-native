import {useRef, useState, useEffect} from 'react';
import {FcSmartphoneTablet, FcGlobe} from 'react-icons/fc';
import {VscGithub} from 'react-icons/vsc';
// Import './shim.d.ts';
import Snack from './snack';
import logo from './assets/lyra.svg';

function App() {
  const r = useRef(null);

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto font-sans p-3 pt-8">
        <div className="flex mb-3">
          <div className="grow-1 md:basis-1/5 basis-1/2">
            <img src={logo} className="h-60px" />
          </div>
          <div className="grow-6 md:basis-3/5 basis-1/2 leading-none flex flex-row md:justify-center justify-end">
            <div className="flex flex-col justify-center">
              <div className="text-5xl">
                Lyra Demo <div className="i-fxemoji:sparkles" inline="block" />
              </div>
            </div>
          </div>
          <div className="grow-1 md:basis-1/5 basis-0"></div>
        </div>
        <div className="flex justify-center" m="b-4">
          <div className="my-8 text-lg flex flex-col gap-4 md:basis-3/5">
            <div className="">
              This site demonstrates how Lyra, the crazy fast full-text search
              engine, can be embedded in a cross-platform react native
              application.
            </div>
            <div flex items="center" m="t-10 b-4" className="">
              <div className="i-akar-icons:globe mr-3 h-8 w-8" />
              <span className="font-bold text-2xl">react-native-web</span>
            </div>
            <div>
              <a className="text-rose" href="/rn-web">
                Click here
              </a>{' '}
              to visit the react-native-web build of the full demo (includes the
              full 10 MB dataset).
            </div>
            <div flex items="center" m="t-10 b-4">
              <div className="i-line-md:github-loop mr-3 h-8 w-8" />
              <span className="font-bold text-xl">source</span>
            </div>
            <div>
              Checkout the{' '}
              <a text="rose" href="">
                repo on GitHub
              </a>{' '}
              and run the full demo yourself. You download the demo with the
              full 10MB dataset to your mobile device to see just how fast Lyra
              is!
            </div>
            <div flex items="center" m="t-10 b-4" className="">
              <div className="i-akar-icons:mobile-device mr-3 h-8 w-8" />
              <span className="font-bold text-2xl">snack</span>
            </div>
            <div>
              Scroll down{' '}
              <div
                className="i-fxemoji:blackdownpointingdoublearrow"
                inline="block"
              />{' '}
              to see the Expo Snack deployment of Lyra (great for mobile
              devices!).
            </div>
            <div>
              The snack version uses a smaller dataset in order to work with the
              Expo Snack architecture (it doesn't like 10MB files). If you
              download Expo Go from your app store, you can scan the QR code and
              run the Lyra demo directly on phone 🤯!!!
            </div>
          </div>
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
