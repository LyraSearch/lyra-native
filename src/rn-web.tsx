export default function RnWeb() {
  return (
    <>
      <div>
        Embedded in the iframe below{' '}
        <div
          className="i-fxemoji:blackdownpointingdoublearrow"
          inline="block"
        />{' '}
        is the react-native-web build of the full demo (includes the full 10 MB
        dataset).
      </div>
      <div>
        Using react-native, the demo can also be built for native apps. Checkout
        the{' '}
        <a href="https://github.com/codyzu/lyra-native" text="rose">
          repo on GitHub
        </a>{' '}
        to deploy the full demo to your mobile device using Expo Go
      </div>
      <div>
        <iframe
          src="rn-web"
          w="full"
          h="700px"
          bg="neutral-800"
          border="solid width-1px slate-300 rounded-xl"
        />
      </div>
    </>
  );
}
