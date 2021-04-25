import React from 'react';
import {useAppStyles} from "components/app/styles";
import FileUpload from "components/file-upload";
import ImageProvider from "components/app/context";
import ImageContainer from "components/image-container";
import ClearButton from "components/clear-button";

const App = (): JSX.Element => {
  const classes = useAppStyles();

  return (
      <div className={classes.root}>
          <div className={classes.applicationWrapper}>
              <ImageProvider>
                  <div className={classes.action}>
                      <FileUpload />
                      <ClearButton />
                  </div>
                  <ImageContainer />
              </ImageProvider>
          </div>
      </div>
  );
}

export default App;
