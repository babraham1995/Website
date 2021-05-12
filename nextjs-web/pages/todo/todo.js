import Link from 'next/link'
import Layout from '../../components/layout/layout'
import SideBar from '../../components/sidebar/sidebar'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import TodoList from '../../TodoList';
import React, { useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainComponent from '../../components/maincomponent/maincomponent';
import HeaderBro from '../../components/headerbro/headerbro';
import Footer from '../../components/footer/footer';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function FirstPost() {
    const classes = useStyles();

  return (
      <>
      <HeaderBro class="header1"></HeaderBro>
      <div class="flex-grid">
      <div class="col1">
        <SideBar/>
        </div>
      <div class="col2">
      
    <MainComponent/>
    </div>
    </div>
<Footer/>
</>
  )
}