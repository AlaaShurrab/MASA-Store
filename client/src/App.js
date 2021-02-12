import { create } from 'jss';
import rtl from 'jss-rtl';

import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
} from '@material-ui/core/styles';

import theme from './component/theme/theme';
import CartCard from './component/card/index';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div color="primary">Welcome to MASA STORE</div>
        <CartCard />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
