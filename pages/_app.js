// import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
// import theme from "../theme";
import { wrapper } from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        > */}
          <Component {...pageProps} />
        {/* </ColorModeProvider>
      </ChakraProvider> */}
    </>
  );
}

export default wrapper.withRedux(MyApp);
