import makeSharedStyles from "@material-ui/core/styles/makeStyles";

export const useUploadButtonStyles = makeSharedStyles(theme => ({
    root: {
        width: "360px",
        height: "36px",
        marginBottom: theme.spacing(2)
    }
}));
