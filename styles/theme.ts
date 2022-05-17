type Color = string;

interface colorsInterface {
  pink: Color;
  blue: Color;
  darkBlue: Color;
  lightBlue: Color;
  orange: Color;
  gray: Color;
  darkGray: Color;
  lightGray: Color;
  white: Color;
  darkerWhite: Color;
  hover: Color;
  error: Color;
}

interface themeInterface {
  colors: colorsInterface;
}

export const theme: themeInterface = {
  colors: {
    pink: '#AD1FEA',
    blue: '#4661E6',
    darkBlue: '#3A4374',
    lightBlue: '#62BCFA',
    orange: '#F49F85',
    gray: '#647196',
    lightGray: '#F2F4FF',
    darkGray: '#373F68',
    white: '#FFFFFF',
    darkerWhite: '#F7F8FD',
    hover: '#CFD7FF',
    error: '#D73737',
  },
};
