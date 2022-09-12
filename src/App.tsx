import { useRef, useState } from 'react'
import classes from './app.module.css'
// import 'virtual:uno.css'

function App() {
  const r = useRef(null)

  return (
    <>
    <div className="container mx-auto font-sans">
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='p-8'>Lyra Demo</div>
      </div>
    {/* Not sure why, but the embedded snack does not work with vite dev server. It does work in the built site */}
    <div ref={r} data-snack-id="@codyzu/github.com-codyzu-lyra-native@snack-size" data-snack-platform="mydevice" data-snack-preview="true" data-snack-theme="dark" className={classes.snack}></div>
    <div className='flex flex-row-reverse'>
      <div className="flex-none">Click on the various platforms to see all of the magic 👆</div>
    </div>
    </div>
    
    </>
  )
}

export default App
