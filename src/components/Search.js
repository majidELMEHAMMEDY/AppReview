

import { Container } from '@material-ui/core';
import styled from 'styled-components';
import { FaSearch } from "react-icons/fa";


import React from 'react';

// imports
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField"
import SearchIcon from "@material-ui/icons/Search";
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles';


import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MaterialUIPickers from "./DatePicker"



const Body = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    flex-flow: column nowrap;
    z-index: 30;
    
`
const Item = styled.div`
    margin-bottom: 15px;
    width:100%;
    display: flex;
    heighth:25%
    
   
`
const Stars = styled.div`
    width:50%;
`
const Mbox = styled.div`
    width:25%;
    display:flex;
    flex-direction: column;
`
const Number = styled.p`
    font-size:13px;
    margin:2px;
    color:#dbdbdb;
`

// render

const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'Search',
      label: 'all times',
    },
    {
      value: 'star',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        
      }
      
      
    },
  }));


function Search({onClickRating}){
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('Search');
    
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const iconName = "Search";
    return(
       
       <Body>
            <Item>
            <TextField
                    placeholder="Search"
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start"> 
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                        </InputAdornment>
                        
                    )
                    }}
                    
                />

            </Item>
            <Item>
            <TextField
                        
                        fullWidth
                        select
                        size="small"
                        variant="outlined"
                        placeholder="all times"
                        >
                            <MaterialUIPickers />
                        </TextField>
            </Item>
           
            <Typography component="legend" style={{marginTop:"4px"}} >Filter by Rating</Typography>
            <Item>
            
                <Stars>
                   
                       
                        <Rating name="read-only" value="5"  onClick={onClickRating} size="small"/>
                        <Rating name="read-only" value="4" readOnly size="small" />
                        <Rating name="read-only" value="3" readOnly size="small" />
                        <Rating name="read-only" value="2" readOnly size="small" />
                        <Rating name="read-only" value="1" readOnly size="small" />
                   
                </Stars>
                <Mbox>

                </Mbox>
                <Mbox>
                    <Number>129</Number>
                    <Number>12</Number>
                    <Number>4</Number>
                    <Number>2</Number>
                    <Number>4</Number>
                </Mbox>
            </Item>
            <Typography component="legend" style={{marginTop:"4px"}} >Filter by Version</Typography>
            <Item>
            
                <Stars>
                <Typography component="legend"  style={{marginTop:"2px",fontSize:"13px"}}>1.2.0</Typography>
                <Typography component="legend"  style={{marginTop:"2px",fontSize:"13px"}}>1.1.4</Typography>
                <Typography component="legend"  style={{marginTop:"2px",fontSize:"13px"}}>1.1.0</Typography>
                <Typography component="legend"  style={{marginTop:"2px",fontSize:"13px"}}>1.0</Typography>
                
                </Stars>
                <Mbox>

                </Mbox>
                <Mbox>
                    <Number>129</Number>
                    <Number>12</Number>
                    <Number>4</Number>
                    <Number>2</Number>
                    
                </Mbox>
            </Item>
            <Typography component="legend" style={{marginTop:"4px"}} >Filter by Country</Typography>
            <Item>
            
                <Stars>
                <Typography component="legend"  style={{marginTop:"2px",fontSize:"13px"}}>United States</Typography>
                <Typography component="legend"  style={{marginTop:"2px",fontSize:"13px"}}>United Kingdom</Typography>
                <Typography component="legend"  style={{marginTop:"2px",fontSize:"13px"}}>Germany</Typography>
                <Typography component="legend"  style={{marginTop:"2px",fontSize:"13px"}}>japan</Typography>
                
                </Stars>
                <Mbox>

                </Mbox>
                <Mbox>
                    <Number>129</Number>
                    <Number>12</Number>
                    <Number>4</Number>
                    <Number>2</Number>
                    
                </Mbox>
            </Item>
       </Body>
        
    )
}

export default Search;


/**
 * <Body>
                <FaSearch/>
                <Input type="text" placeholder="Search" />
            </Body>
        
 */