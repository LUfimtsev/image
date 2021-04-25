import React from "react";
import {useClearButtonStyles} from "components/clear-button/styles";
import {Button} from "@material-ui/core";
import {useImageContext} from "components/app/context";

const ClearButton = (): JSX.Element => {
    const classes = useClearButtonStyles();
    const { image, setImage } =useImageContext();

    const onClick = (): void => {
        setImage("");
    }

    return image ? (
        <Button
            variant="contained"
            classes={{ ...classes }}
            onClick={onClick}
        >Clear all</Button>) : <></>
}

export default ClearButton;
