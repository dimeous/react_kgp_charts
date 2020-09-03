import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from "@material-ui/core/Button";
import CheckboxList from "./CheckBoxList";

import { itemsFetchData } from '../actions/items';


export const mainListItems = (
  <ListItem>
      <Button variant="contained" color="primary" onClick={itemsFetchData('http://599167402df2f40011e4929a.mockapi.io/items')}>
          Построить г рафик
      </Button>
  </ListItem>
);

export const secondaryListItems = (
    <div>
        <CheckboxList> </CheckboxList>
    </div>
);
