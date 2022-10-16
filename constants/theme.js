import { createTheme } from '@mui/material/styles';

import Colors from './colors';

export const defaultTheme = {
    palette: {
        primary: {
            main: '#3981d2',
            light: '#b3ddfe',
            dark: '#02295d',
            background: '#fff',
            foreground: '#4d4d4d',
            foregroundTint: '#888888',
            accent: '#d5309b',
            accent2: '#f9e84d',
            accent3: '#4cb944',
        },
        secondary: {
            main: '#464646',
            background: '#000',
            foreground: '#fff',
            foregroundTint: '#d9d9d9',
        },
    },
    overrides: {
        MuiOutlinedInput: {
            root: {
                "& $notchedOutline": {
                    borderColor: "transparent"
                },
                "&:hover $notchedOutline": {
                    borderColor: Colors.$primaryLight
                },
                "&$focused $notchedOutline": {
                    borderColor: Colors.$accent
                }
            },
        },
        MuiPaper: {
            root: {
                color: Colors.$primary
            }
        }
    },
    size: {
        pageMaxWidth: 1500
    }
};

const Themes = {
    defaultTheme: createTheme(defaultTheme),
};

export default Themes;
