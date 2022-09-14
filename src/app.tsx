import {useRef} from 'react';
import {Link, NavLink, Outlet} from 'react-router-dom';
import Snack from './snack';
import logo from './assets/lyra.svg';

function App() {
  const r = useRef(null);

  return (
    <div bg="gray-900" text="white" className="min-h-screen">
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
                Lyra React Native Demo{' '}
                <div className="i-fxemoji:sparkles" inline="block" />
              </div>
            </div>
          </div>
          <div grow="1" md="basis-1/5" className="basis-0" />
        </div>
        <div flex justify="center" m="b-4">
          <div text="lg" flex="~ col" gap="4" md="basis-3/5" m="y-8">
            <div>
              {/* https://flowbite.com/docs/components/tabs/#pills-tabs */}
              <ul
                className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"
                justify="center"
              >
                <TabLink to="/" end>
                  <div
                    align-middle
                    className="i-akar-icons:home"
                    w="5"
                    h="5"
                    m="r-2"
                    inline="block"
                  />
                  home
                </TabLink>
                <TabLink to="/web">
                  <div
                    m="r-2"
                    h="5"
                    w="5"
                    inline="block"
                    align-middle
                    className="i-akar-icons:globe"
                  />
                  rn web
                </TabLink>
                <TabLink to="/snack">
                  <div
                    m="r-2"
                    h="5"
                    w="5"
                    inline="block"
                    align-middle
                    className="i-akar-icons:mobile-device"
                  />
                  snack
                </TabLink>
                <li m="r-2">
                  <a
                    inline="block"
                    p="y-3 x-4"
                    rounded-lg
                    hover="text-gray-900 bg-rose-100"
                    aria-current="page"
                    href="https://github.com/codyzu/lyra-native"
                  >
                    <div
                      m="r-2"
                      h="5"
                      w="5"
                      inline="block"
                      align-middle
                      className="i-line-md:github-loop"
                    />
                    source
                  </a>
                </li>
              </ul>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

function TabLink(props: {
  [x: string]: any;
  children: React.ReactNode;
  to: string;
}) {
  const {children, to, ...rest} = props;
  return (
    <li m="r-2">
      <NavLink
        to={to}
        inline="block"
        p="y-3 x-4"
        rounded-lg
        className={({isActive}) =>
          isActive
            ? 'text-white bg-rose-600'
            : 'hover:text-gray-900 hover:bg-rose-100'
        }
        aria-current="page"
        {...rest}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default App;
