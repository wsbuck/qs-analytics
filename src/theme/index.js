import { createMuiTheme } from '@material-ui/core/styles';

// const primaryColor = '#37474f';
const primaryColor = '#607d8b';
const secondaryColor = '#e3f2f0';
// const bgColor = '#d8f2ff';
const bgColor = '#cfd8dc';
const textColor = '#eeeeee';

export default createMuiTheme({
  palette: {
    primary: { main: primaryColor },
    secondary: { main: secondaryColor },
    background: { default: bgColor },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: '#eceff1',
        // color: textColor,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(81, 81, 81, 1)',
      },
      head: {
        color: 'white',
      },
      body: {
        // color: textColor,
      },
    },
  },
})