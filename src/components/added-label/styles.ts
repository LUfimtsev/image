import makeSharedStyles from "@material-ui/core/styles/makeStyles";
import {AddedLabelObject} from "components/image-container";

export const useAddedLabelStyles = makeSharedStyles(theme => ({
    root: {
        position: "fixed",
        borderRadius: "5px",
        backgroundColor: "#6767676e",
        top: (props: AddedLabelObject) => props.clientY,
        left: (props: AddedLabelObject) => props.clientX,
        padding: theme.spacing(),
    },
    editable: {
        display: "flex",
        flexDirection: "column",
        "& .actions": {
            display: "flex",
            flexDirection: "row",
            marginTop: theme.spacing(),
            "& .save-button": {
                marginRight: theme.spacing()
            }
        },
    }
}));
