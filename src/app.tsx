import {useRef} from 'react';
import Snack from './snack';
import logo from './assets/lyra.svg';

function App() {
  const r = useRef(null);

  return (
    <div bg="gray-900" text="white">
      <div container mx-auto font="sans" p="3 t8">
        <div flex m="b-3">
          <div grow="1" md="basis-1/5" className="basis-1/2">
            <img src={logo} h="60px" />
          </div>
          <div
            flex="~ row"
            grow="6"
            leading-none
            justify="end"
            md="justify-center basis-3/5"
            className="basis-1/2"
          >
            <div flex="~ flex-col" justify="center">
              <div text="5xl">
                Lyra Demo <div className="i-fxemoji:sparkles" inline="block" />
              </div>
            </div>
          </div>
          <div grow="1" md="basis-1/5" className="basis-0" />
        </div>
        <div flex justify="center" m="b-4">
          <div text="lg" flex="~ col" gap="4" md="basis-3/5" m="y-8">
            <div>
              This site demonstrates how Lyra, the crazy fast full-text search
              engine, can be embedded in a cross-platform react native
              application.
            </div>
            <div flex m="t-10 b-4" items-center>
              <div m="r-3" h="8" w="8" className="i-akar-icons:globe" />
              <span font="bold" text="2xl">
                react-native-web
              </span>
            </div>
            <div>
              <a text="rose" href="/rn-web">
                Click here
              </a>{' '}
              to visit the react-native-web build of the full demo (includes the
              full 10 MB dataset).
            </div>
            <div flex m="t-10 b-4" items-center>
              <div m="r-3" h="8" w="8" className="i-line-md:github-loop" />
              <span font="bold" text="2xl">
                source
              </span>
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
            <div flex m="t-10 b-4" items-center>
              <div m="r-3" h="8" w="8" className="i-akar-icons:mobile-device" />
              <span font="bold" text="2xl">
                snack
              </span>
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
              run the Lyra demo directly on phone{' '}
              <div className="i-fxemoji:sunglasses" inline="block" />
              !!!
            </div>
          </div>
        </div>
        <Snack />
        <div flex="~ row-reverse">
          <div flex="none">
            Click on the various platforms to see all of the magic 👆
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
