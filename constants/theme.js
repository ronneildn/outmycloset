import { createTheme } from '@mui/material/styles';

import Colors from './colors';

export const defaultTheme = {
    palette: {
        primary: {
            main: '#3981d2',
            light: '#b3ddfe',
            dark: '#02295d',
            background: '#fff',
            foreground: '#333',
            accent: '#d5309b',
            accent2: '#f9e84d',
        },
        secondary: {
            main: '#464646',
            background: '#000',
            foreground: '#fff',
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
        pageMaxWidth: 1080
    }
};

const Themes = {
    defaultTheme: createTheme(defaultTheme),
};

export default Themes;
