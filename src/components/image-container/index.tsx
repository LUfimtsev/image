import React, {useCallback, useEffect, useState} from "react";
import {useImageContainerStyles} from "components/image-container/styles";
import {useImageContext} from "components/app/context";
import AddedLabel from "components/added-label";

export interface AddedLabelObject {
    clientX: number;
    clientY: number;
    isEditing: boolean;
    previousWindowHeight: number;
    previousWindowWidth: number;
}

const ImageContainer = (): JSX.Element => {
    const classes = useImageContainerStyles();
    const { image } = useImageContext();

    const [labelsList, setLabelsList] = useState<AddedLabelObject[]>([]);

    const onResize = useCallback(() => {
        const { innerHeight, innerWidth } = window;
        const updatedDimensionsArray = labelsList.map((item) => ({
            ...item,
            clientX: innerWidth * (item.clientX / item.previousWindowWidth),
            clientY: innerHeight * (item.clientY / item.previousWindowHeight),
            previousWindowHeight: innerHeight,
            previousWindowWidth: innerWidth
        }));
        setLabelsList(updatedDimensionsArray);
    }, [labelsList]);
    const onClick = (e: React.MouseEvent): void => {
        if (!image || labelsList.findIndex(item => item.isEditing) !== -1) {
            return;
        }
        const { clientX, clientY } = e;
        setLabelsList(prevState => [...prevState,
            {
                clientX: clientX,
                clientY: clientY,
                isEditing: true,
                previousWindowHeight: window.innerHeight,
                previousWindowWidth: window.innerWidth,
            }])
    }
    const onRemoveLabel = (): void => {
        const updatedList = labelsList.slice(0, labelsList.length - 1);
        setLabelsList(updatedList);
    }
    const onSave = (index: number): void => {
        const newList = labelsList.slice();
        newList[index].isEditing = false;
        setLabelsList(newList);
    }

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return function () {
            window.removeEventListener('resize', onResize);
        }
    }, [onResize]);

    useEffect(() => {
        if (!image && labelsList.length > 0) {
            setLabelsList([]);
        }
    }, [labelsList.length, image]);

    return (
        <div
            className={`${classes.root} ${image ? classes.consistImage : classes.empty}`}
            onClick={onClick}
        >
            {image
                ? <img src={image} alt="" />
                : <span>There is nothing yet. Click "Upload Image" to continue</span>}
            {labelsList.length > 0 && labelsList.map((item, index) =>
                <AddedLabel
                    key={index}
                    config={item}
                    onRemove={onRemoveLabel}
                    onSave={() => onSave(index)}
                />
            )}
        </div>
    );
}

export default ImageContainer;
