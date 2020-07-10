import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';

import '../App.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h1" className={classes.title}>
            Pairahan...<br/>

                
            <Link className='Link' to='/' >Home</Link> {'  '}
            <Link className='Link' to='launch'>Launch</Link>
            
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}