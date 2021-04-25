import React, {useState} from "react";
import {useAddedLabelStyles} from "components/added-label/styles";
import {AddedLabelObject} from "components/image-container";
import {Button, TextField} from "@material-ui/core";

interface Props {
    config: AddedLabelObject;
    onRemove: () => void;
    onSave: () => void;
}

const AddedLabel = ({ config, onRemove, onSave }: Props): JSX.Element => {
    const classes = useAddedLabelStyles(config);

    const [isEdit, setIsEdit] = useState(true);
    const [labelText, setLabelText] = useState<string>("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setLabelText(event.target.value);
    };
    const onSaveClick = (event: React.MouseEvent): void => {
        event.stopPropagation();
        setIsEdit(false);
        onSave();
    }
    const onClear = (event: React.MouseEvent): void => {
        event.stopPropagation();
        onRemove();
    }
    const stopPropagation = (event: any): void => {
        event.stopPropagation();
    }



    return (
        <div className={classes.root}>
            {isEdit ? (
                <div className={classes.editable}>
                    <TextField
                        autoFocus
                        onChange={onChange}
                        onBlur={stopPropagation}
                        onClick={stopPropagation}
                    />
                    <div className="actions">
                        <Button
                            variant="contained"
                            color="primary"
                            className="save-button"
                            onClick={onSaveClick}
                        >Save</Button>
                        <Button variant="contained" onClick={onClear} >Cancel</Button>
                    </div>
                </div>
            ) :
                <span>{labelText}</span>
            }
        </div>
    );
}

export default AddedLabel;
