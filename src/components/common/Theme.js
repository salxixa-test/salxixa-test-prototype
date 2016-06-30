import {
    blue500,
    blue700,
    grey400,
    pinkA200,
    grey100,
    grey300,
    grey500,
    darkBlack,
    fullBlack,
    white
} from "material-ui/styles/colors";
import {fade} from "material-ui/utils/colorManipulator";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const Theme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
        primary3Color: grey400,
        accent1Color: pinkA200,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: blue500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack
    }
})

export default Theme;
