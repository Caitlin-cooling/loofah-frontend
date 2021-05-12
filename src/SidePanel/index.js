import React from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import {
  Drawer,
  Divider,
  Toolbar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckboxGroup } from "./CheckboxGroup";
import { GET_GRADES_QUERY } from "../queries/grade.queries";
import { GET_CRAFTS_QUERY } from "../queries/craft.queries";

const drawerWidth = 300;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  }
}));

export const SidePanel = ({ handleFilterChange }) => {
  const classes = useStyles();

  const {
    loading: gradesLoading,
    error: gradesError,
    data: gradesResponse
  } = useQuery(GET_GRADES_QUERY);

  const {
    loading: craftsLoading,
    error: craftsError,
    data: craftsResponse
  } = useQuery(GET_CRAFTS_QUERY);


  if (gradesLoading || craftsLoading) return <p>Loading...</p>;
  if (gradesError || craftsError) return <p>Error</p>;

  return (
    <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <Toolbar />
    <div>
      <CheckboxGroup
        groupTitle="Grades"
        handleFilterChange={handleFilterChange}
        listItems={gradesResponse.grades}
        keyName="gradeTitles"
      />
      <Divider />
      <CheckboxGroup
        groupTitle="Crafts"
        handleFilterChange={handleFilterChange}
        listItems={craftsResponse.crafts}
        keyName="craftTitles"
      />
    </div>
  </Drawer>
  );
};

SidePanel.propTypes = {
  handleFilterChange: PropTypes.func
};