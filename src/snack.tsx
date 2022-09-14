import {useEffect} from 'react';

export default function Snack() {
  // UnoCSS vite plugin breaks loading of the snack in dev mode when in the index.js.
  // Add the snack embed script here in an effect to make it stable in dev and production.
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://snack.expo.dev/embed.js';
    script.async = true;
    document.body.append(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <div>
        Scroll down{' '}
        <div
          className="i-fxemoji:blackdownpointingdoublearrow"
          inline="block"
        />{' '}
        to see the Expo Snack deployment of Lyra (great for mobile devices!).
      </div>
      <div>
        The snack version uses a smaller dataset in order to work with the Expo
        Snack architecture (it doesn't like 10MB files). If you download Expo Go
        from your app store, you can scan the QR code and run the Lyra demo
        directly on phone{' '}
        <div className="i-fxemoji:sunglasses" inline="block" />! Or go the{' '}
        <a href="https://github.com/codyzu/lyra-native" text="rose">
          repo on GitHub
        </a>{' '}
        and deploy the demo with the full 10MB dataset directly to your portable
        device.
      </div>
      <div>
        If your window is too small in width (i.e. on a mobile device), Expo
        Snack will hide the rendered react native application. This page works
        best on a computer screen.
      </div>
      <div
        data-snack-id="@codyzu/github.com-codyzu-lyra-native@snack-size"
        data-snack-platform="ios"
        data-snack-preview="true"
        data-snack-theme="dark"
        bg="neutral-800"
        border="solid width-1px slate-300 rounded-xl"
        h="700px"
        w="full"
        overflow="hidden"
      />
      <div flex="~ row-reverse">
        <div flex="none">
          Click on the various platforms to see all of the magic 👆
        </div>
      </div>
    </>
  );
}
