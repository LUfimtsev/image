import makeSharedStyles from "@material-ui/core/styles/makeStyles";

export const useAppStyles = makeSharedStyles(theme => ({
    root: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Roboto",
    },
    action: {
        display: "flex",
    },
    clearButton: {
        width: "360px",
        height: "36px",
        marginLeft: theme.spacing(2),
    },
    applicationWrapper: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(2),
        maxHeight: `calc(100vh - ${2 * theme.spacing(2)}px)`,
    }
}));
