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
    <div
      data-snack-id="@codyzu/github.com-codyzu-lyra-native@snack-size"
      data-snack-platform="ios"
      data-snack-preview="true"
      data-snack-theme="dark"
      className="h-700px w-full overflow-hidden bg-neutral-800 border-solid border-width-1px border-slate-300 rounded-xl"
    ></div>
  );
}
