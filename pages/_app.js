import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <SessionProvider session={pageProps.session}>  
      <Component {...pageProps} />
     </SessionProvider>
  }