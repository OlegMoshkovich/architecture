import { createTheme } from '@mui/material/styles';

const simpleTheme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black color
    },
    secondary: {
      main: '#FFFFFF', // White color
    },
    background: {
      default: '#FFFFFF', // Light grey background
      paper: '#ffffff', // White paper background
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#555555', // Grey text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Default font family
    fontSize: 14, // Base font size
  },
  spacing: 8, // Default spacing unit
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#000000', // Black color on hover
            color: '#FFFFFF', // White text on hover for contrast
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '16px', // Match button font size
          color: '#000000', // Match button text color
          textAlign: 'center', // Center the dialog title
        },
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: 'background' },
          style: ({ ownerState, theme }) => ({
            boxShadow: theme.shadows[ownerState.elevation],
            padding:'1em',
            overflow:'scroll',
            backgroundColor:theme.palette.background.paper,
          })
        },
      ]
    },
    MuiIconButton: {
      styleOverrides: {
        root:({ theme }) => ({
          backgroundColor: theme.palette.background.default, // use palette color here
          color:  theme.palette.primary.main, // Icon color
          border: `1px solid ${theme.palette.background.paper}`,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main, // Background color on hover
          },
        }),
        selected:({ theme }) => ({
          backgroundColor: theme.palette.secondary.main, // use palette color here
        })
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: ({ theme }) => ({
          border:'none',
        }),
      }
    },
    MuiList: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.paper, // use palette color here
          padding:'0px',
        }),
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default, // use palette color here
          // borderBottom:`1px solid ${theme.palette.background.paper}`,
          borderTop:`1px solid ${theme.palette.background.paper}`,
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.background.default, // use palette color here
          // borderBottom:`1px solid ${theme.palette.secondary.main}`
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main, // use palette color here
          // border:`1px solid ${theme.palette.background.paper}`,
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: `${theme.palette.primary.main}`, // Default border color in rest state
          textAlign: 'center',
          paddingTop: '30px',
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }) => ({
          // backgroundColor: `${theme.palette.background.default}`, // Default border color in rest state
        }),
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
          marginBottom:'10px'
        }
      },
    },
    MuiSwitch: {
      root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: 8,
      },
      switchBase: {
        padding: 1,
        '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
          transform: 'translateX(16px)',
          color: '#fff',
          '& + $track': {
            opacity: 1,
            border: 'none',
          },
        },
      },
      thumb: {
        width: 24,
        height: 24,
      },
      track: {
        borderRadius: 13,
        border: '1px solid #bdbdbd',
        backgroundColor: '#fafafa',
        opacity: 1,
        transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      },
    },
    MuiTreeItem: {
      styleOverrides: {
        content: {
          width: '93%',
        }
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: ({ theme }) => ({
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.background.main,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        }),
        input: ({ theme }) => ({
          color: theme.palette.primary.main,
          '&::placeholder': {
            // color:  theme.palette.background.primary,
          },
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.background.paper,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main,
          },
        }),
        input: ({ theme }) => ({
          color: theme.palette.primary.main,
          '&::placeholder': {
            color:  theme.palette.primary.main,
          },
        }),
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '20x',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.background.default,
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.primary.main} !important`, // Maintain border color on hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.primary.main} !important`, // Maintain border color when focused
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.background.paper, // Change this to your desired color for the rest state
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main, // Change this to your desired color for hover
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.primary.main, // Change this to your desired color for focus
          },
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: ({ theme }) => ({
          backgroundColor: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
          },
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.primary.main,
          '&&:hover': { // Increased specificity
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
          },
        }),
        root: {
          fontSize: '1rem',
          padding: '8px',
          borderRadius: '0px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: `${theme.palette.background.default}`, // Default border color in rest state
          color:`${theme.palette.primary.main}`
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }) => ({
          color:`${theme.palette.primary.main}` // Sets the text color inside the card content to the primary color
        }),
      },
    },
  },
});

export default simpleTheme;
