import makeSharedStyles from "@material-ui/core/styles/makeStyles";

export const useClearButtonStyles = makeSharedStyles(theme => ({
    root: {
        width: "360px",
        height: "36px",
        marginLeft: theme.spacing(2),
    },
}))
