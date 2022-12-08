import 'styled-components';

import pattern from './pattern';

declare module 'styled-components' {
  type ThemeType = typeof pattern

  export interface DefaultTheme extends ThemeType {}
};