import React, {ChangeEvent} from 'react';
import {Button} from "@material-ui/core";
import {useUploadButtonStyles} from "components/file-upload/styles";
import {useImageContext} from "components/app/context";

const FileUpload = (): JSX.Element => {
    const classes = useUploadButtonStyles();

    const { setImage } = useImageContext();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.length ? e.target.files[0] : null;
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    }

    return (
        <Button
            variant="contained"
            color="primary"
            classes={{ ...classes }}
            component="label"
        >
            Upload Image
            <input type="file" hidden onChange={handleChange}/>
        </Button>
    );
}

export default FileUpload;
