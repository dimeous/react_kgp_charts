import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from "@material-ui/core/Button";
import CheckboxList from "./CheckBoxList";

import { itemsFetchData } from '../actions/items';


export const mainListItems = (
  <ListItem>
      <Button variant="contained" color="primary" onClick={()=>console.log(0)}>
          Построить график
      </Button>
  </ListItem>
);

export const secondaryListItems = (
    <div>
        <CheckboxList> </CheckboxList>
    </div>
);
