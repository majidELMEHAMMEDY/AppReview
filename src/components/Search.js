


import React from 'react';
import DatePicker from "react-datepicker";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Link from "@material-ui/core/Link"
import TextField from "@material-ui/core/TextField"
import SearchIcon from "@material-ui/icons/Search";
import CalendarToday from "@material-ui/icons/CalendarToday"
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import ReactCountryFlag from "react-country-flag"

import CustomizedProgressBars from "./CustomizedProgressBars"

import "react-datepicker/dist/react-datepicker.css"
import {Body, Item, Stars, Mbox, Number} from "../style"



// render

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        
      }
      
      
    },
  }));


function Search({onClickVersion,onChangeSearch,onClickRating,onChangeDate,Datevalue,onClickCountry,countryCountArray,filtersCountArray,starsCountArray}){
    const RatingValues =[5,4,3,2,1]
    const versionValues =["v1.2.1","V1.1","v1.1.0","v1.0"];
    const countryList =[
      {name:"United States", shortCut:"US",svg:"US"},
      {name:"United Kingdom", shortCut:"UK",svg:"GB"},
      {name:"Germany", shortCut:"Germany",svg:"DE"},
      {name:"Japan", shortCut:"Japan",svg:"JP"}]

    const totalRating = starsCountArray.reduce((a, b) => a + b, 0);
    const porsArray = starsCountArray.map(el => 
            (el*100)/totalRating
        )

    return(
       
       <Body>
            <Item>
            <TextField
                    onChange={onChangeSearch}
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
            
            <DatePicker 
            selected={Datevalue} 
            onChange={onChangeDate} 
           
            dateFormat="dd MMM yyyy " 
            
            isClearable
            placeholderText="all Times"
            customInput={<TextField
                          onChange={onChangeSearch}
                          placeholder="Search"
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputProps={{
                            startAdornment: (
                            <InputAdornment position="start"> 
                            <IconButton>
                                <CalendarToday />
                            </IconButton>
                            </InputAdornment>
                            
                        )
                        }}
                      />}/>
                     
         </Item>
           
            <Typography component="legend" style={{marginTop:"4px",fontWeight:"bold"}} >Filter by Rating</Typography>
            <Item>
            
                <Stars>
                   
                      {RatingValues.map(element => (
                          <Link onClick={()=>onClickRating(element)} data-id={element} style={{cursor:"pointer"}}>
                                <Rating name="pris" value={element} readOnly cursor="pointer" size="small" />
                          </Link>
                      ))}
                </Stars>
                <Mbox>
                        {porsArray.map(el =>(
                            <CustomizedProgressBars value={el}/>
                        ))}
                        
                        
                </Mbox>
                <Mbox>
                    {starsCountArray.map(el=>(
                             <Number >{el}</Number>
                    ))}
                   
                    
                </Mbox>
            </Item>
            <Typography component="legend" style={{marginTop:"4px",fontWeight:"bold"}} >Filter by Version</Typography>
            <Item>
                <Stars>
                {versionValues.map(element => (
                          <Link onClick={()=>onClickVersion(element)} style={{cursor:"pointer",textDecoration:"none",color:"black"}}>
                                <Typography  component="legend"  style={{marginTop:"2px",fontSize:"13px",cursor:"pointer"}}>{element}</Typography>
                          </Link>
                      ))}
                
                
                </Stars>
                <Mbox>

                </Mbox>
                <Mbox>
                   { filtersCountArray.map(el => (
                        <Number>{el}</Number>
                   ))}
                    
                    
                    
                </Mbox>
            </Item>
            <Typography component="legend" style={{marginTop:"4px",fontWeight:"bold"}} >Filter by Country</Typography>
            <Item>
            
                <Stars >
                {countryList.map(element => (
                          <Link onClick={()=>onClickCountry(element.shortCut)} style={{cursor:"pointer",textDecoration:"none",color:"black",display:"flex"}}>
                                <ReactCountryFlag
                                    countryCode={element.svg}
                                    svg
                                    style={{
                                        width: '1.5em',
                                        height: '1.5em',
                                    }}
                                    title="US"
                                    /> 
            <Typography  component="legend"  style={{marginTop:"2px",fontSize:"13px",cursor:"pointer",marginLeft:"5px"}}>{element.name}</Typography>
                          </Link>
                      ))}
                
                
                </Stars>
                <Mbox>

                </Mbox>
                <Mbox>
                { countryCountArray.map(el => (
                        <Number>{el}</Number>
                   ))}
                    
                </Mbox>
            </Item>
            
       </Body>
        
    )
}

export default Search;