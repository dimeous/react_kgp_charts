import React  from 'react';
import ListItem from '@material-ui/core/ListItem';
import CheckboxList from "./CheckBoxList";
import BuildGraf from "./BuildGraf";

export const mainListItems = (
  <ListItem>
        <BuildGraf/>
  </ListItem>
);

export const secondaryListItems = (
    <div>
        <CheckboxList> </CheckboxList>
    </div>
);
