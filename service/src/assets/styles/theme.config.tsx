import { colors as colorsMui } from '@mui/material';
import { createTheme, responsiveFontSizes, darken } from '@mui/material/styles';
import { cloneDeep, merge } from 'lodash';

const colors = {
  primary: {
    contrastText: '#ffffff',
    main: '#3E83FF',
    light: '#3e83ff26',
    opaque: 'rgba(62, 131, 255, 0.7)',
  },
  secondary: {
    contrastText: '#ffffff',
    main: '#28DC8E',
    light: '#CFF9E7',
  },
  warning: {
    contrastText: '#ffffff',
    main: '#ff9c0e',
    light: '#fff0db',
  },
  error: {
    contrastText: '#ffffff',
    main: '#f44336',
    light: '#f9dbd9',
  },
  text: {
    contrastText: '#ffff',
    main: 'rgba(0, 0, 0, 0.87)',
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    light: 'rgba(0, 0, 0, 0.38)',
    dark: '#14142B',
  },
  orange: {
    dark: '#E0890D',
    main: '#FF9C0E',
    light: '#fff0db',
    contrastText: '#ffffff',
  },
  purple: {
    main: '#7400B8',
    contrastText: '#ffffff',
  },
  yellow: {
    main: '#ffdb01',
    contrastText: '#ffffff',
  },
  primaryNetworkme: {
    contrastText: '#ffffff',
    main: '#3E83FF',
    light: '#3e83ff26',
    opaque: 'rgba(62, 131, 255, 0.7)',
  },
  secondaryNetworkme: {
    contrastText: '#ffffff',
    main: '#28DC8E',
    light: '#CFF9E7',
  },
  background: {
    gradient: `linear-gradient(90deg, #28DC8E 0%, #3E83FF 100%)`,
    gradientInverse: `linear-gradient(90deg, #3E83FF 0%, #28DC8E 100%)`,
  },
  divider: '#E6E8F0',
  neutral: {
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  orangeA700: {
    main: colorsMui.orange[900],
    dark: darken(colorsMui.orange[900], 0.3),
    contrastText: '#fff',
  },
  orangeA400: {
    main: colorsMui.orange.A400,
    dark: colorsMui.orange.A700,
    contrastText: '#fff',
  },
  amber400: {
    main: colorsMui.amber[400],
    dark: colorsMui.amber[600],
    contrastText: '#fff',
  },
};

const shadows = [
  'none',
  '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
  '0px 1px 2px rgba(100, 116, 139, 0.12)',
  '0px 1px 4px rgba(100, 116, 139, 0.12)',
  '0px 1px 5px rgba(100, 116, 139, 0.12)',
  '0px 1px 6px rgba(100, 116, 139, 0.12)',
  '0px 2px 6px rgba(100, 116, 139, 0.12)',
  '0px 3px 6px rgba(100, 116, 139, 0.12)',
  '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
  '0px 5px 12px rgba(100, 116, 139, 0.12)',
  '0px 5px 14px rgba(100, 116, 139, 0.12)',
  '0px 5px 15px rgba(100, 116, 139, 0.12)',
  '0px 6px 15px rgba(100, 116, 139, 0.12)',
  '0px 7px 15px rgba(100, 116, 139, 0.12)',
  '0px 8px 15px rgba(100, 116, 139, 0.12)',
  '0px 9px 15px rgba(100, 116, 139, 0.12)',
  '0px 10px 15px rgba(100, 116, 139, 0.12)',
  '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
  '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
  '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
  '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
  '0px 25px 50px rgba(100, 116, 139, 0.25)',
  '0px 25px 50px rgba(100, 116, 139, 0.25)',
  '0px 25px 50px rgba(100, 116, 139, 0.25)',
  '0px 25px 50px rgba(100, 116, 139, 0.25)',
];

const smallScrollBar = {
  overflowY: 'overlay',
  '&::-webkit-scrollbar': {
    width: 4,
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: 8,
    borderWidth: 0,
  },
  '&::-webkit-scrollbar-button': {
    height: 4,
  },
};

const themeOptions: any = {
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          ...smallScrollBar,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
          color: '#FFFFFF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          padding: '4px 10px',
        },
        sizeMedium: {
          padding: '6px 16px',
        },
        sizeLarge: {
          padding: '8px 22px',
        },
        textSizeSmall: {
          padding: '4px 5px',
        },
        textSizeMedium: {
          padding: '6px 8px',
        },
        textSizeLarge: {
          padding: '8px 11x',
        },
        contained: {
          boxShadow:
            '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
          '&:hover': {
            boxShadow:
              '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)',
          },
        },
        disableElevation: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
      variants: [
        {
          props: { variant: 'outlined', customstyle: 'dashed' },
          style: {
            borderStyle: `dashed`,
            borderWidth: 2,
            '&:hover': {
              borderStyle: `dashed`,
              borderWidth: 2,
            },
          },
        },
      ],
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '16px 24px',
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
        subheaderTypographyProps: {
          variant: 'body2',
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState, theme }: any) => ({
          ...(ownerState.select &&
            ownerState.variant === 'filled' && {
              border: '1px solid',
              borderColor: theme.palette[ownerState.color].main,
            }),
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          ...smallScrollBar,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 8,
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: '16px',
          '&.MuiListItemIcon-root': {
            minWidth: 'unset',
          },
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        autoComplete: 'nope',
      },
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: '#65748B',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: '500',
          color: '#65748B',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: '500',
          color: '#111827',
          fontSize: '0.875rem',
          lineHeight: 1.57,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontWeight: 500,
        },
        notchedOutline: {
          borderColor: colors.divider,
        },
      },
      variants: [
        {
          props: { customstyle: 'smooth' },
          style: {
            backgroundColor: '#EFF0F6',
            '&.Mui-focused': {
              backgroundColor: '#EFF0F6',
            },
            '&:hover': {
              backgroundColor: darken('#EFF0F6', 0.03),
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#b1b2ba',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#b1b2ba' },
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: colors.divider,
          borderStyle: 'solid',
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        defaultProps: {
          elevation: 16,
        },
        paper: {
          borderColor: colors.divider,
          borderStyle: 'solid',
          borderWidth: 1,
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: colors.text.dark,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '15px 16px',
          borderBottom: `1px solid ${colors.divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.neutral[100],
          '.MuiTableCell-root': {
            color: colors.neutral[700],
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 770,
      lg: 1250,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    action: {
      active: colors.neutral[500],
      focus: 'rgba(55, 65, 81, 0.12)',
      hover: 'rgba(55, 65, 81, 0.04)',
      selected: 'rgba(55, 65, 81, 0.08)',
      disabledBackground: 'rgba(55, 65, 81, 0.12)',
      disabled: 'rgba(55, 65, 81, 0.26)',
    },
    ...colors,
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    button: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.43,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '1px',
      lineHeight: 2.66,
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.8rem',
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.4rem',
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.375,
    },
  },

  shadows,
};

export const ThemeBuilder = (config = {}) => {
  return responsiveFontSizes(
    createTheme(merge(cloneDeep(themeOptions), config))
  );
};
export const theme = ThemeBuilder();
