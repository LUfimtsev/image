import makeSharedStyles from "@material-ui/core/styles/makeStyles";

export const useImageContainerStyles = makeSharedStyles(theme => ({
    root: {
        border: "1px solid #cecece",
        borderRadius: "5px",
        background: "linear-gradient(90deg, rgba(176,176,176,1) 0%, rgba(214,214,214,1) 23%, rgba(233,233,233,1) 48%, rgba(232,251,255,1) 100%)",
        "& img": {
            width: "100%",
            height: "100%",
        }
    },
    consistImage: {
        maxHeight: `calc(100vh - ${36 + theme.spacing(2) + 2 * theme.spacing(2)}px)` ,
        height: "100%",
    },
    empty: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& span": {
            color: "#a0a0a0",
            fontSize: "30px",
        }
    },
}));
