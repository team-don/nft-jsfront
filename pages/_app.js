import '../styles/globals.css'
import { PortfolioProvider } from "../context/context";
import { prefix } from "../config/config";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// function App() {
//     return (
//         <PortfolioProvider value={ { prefix } }>
//             {/*<Header />*/}
//             {/*<Home />*/}
//             {/*<About />*/}
//             {/*<Skills />*/}
//             {/*<Projects />*/}
//             {/*<Career />*/}
//             {/*<Footer />*/}
//         </PortfolioProvider>
//     );
// }
// export default App;


function App({ Component, pageProps }) {
    return (
        // @ts-ignore
        <PortfolioProvider value={{ prefix }}>
            {/*<RecoilRoot>*/}
            {/*    <Global styles={globalStyles} />*/}
            {/*    <Layout>*/}
                    <Component {...pageProps} />
            {/*    </Layout>*/}
            {/*</RecoilRoot>*/}
        </PortfolioProvider>
    );
}

export default App;