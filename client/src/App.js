import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';

import theme from './component/theme/theme';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div  color="primary">
        Welcome to MASA STOREhh
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
