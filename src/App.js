import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';


import SearchBarTop from "./components/SearchBarTop"
import Search from "./components/Search"
import BodyCard from "./components/Card"
import review from './data/review.json';

import {CardItem} from "./style"




function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [Sorting, setSorting] = useState('Newest first');
  const [postsPerPage,setPostPerPage] = useState(10);
  const [selectedDate,setSelectedDate] = useState(null);
  const [filters,setFilters] = useState(
    [
      {name:"appID",value: null},
      {name:"rating", value :null},
      {name:"version", value:null},
      {name:"countryName", value:null},
      {name:"reviewUserName",value:null}
    ]
  );

  
  
  const ratingPerCountry=["US","UK","Germany","Japan"].map(el =>
      posts.filter(f=> f.countryName == el).length
  );
  
  const ratingPerVersion=["v1.2.1","V1.1","v1.1.0","v1.0"].map(el=>
      posts.filter(f=> f.version == el).length
    )
  const ratingPerStar=["5","4","3","2","1"].map(el=>
    posts.filter(f => f.rating == el).length
    )

  useEffect(()=> {
    const fetchPosts = async () => {
      setPosts(review);
    }
    fetchPosts();
    
  },[])
  

  
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  

  
  const getDateWithNoTime = (date) => {
      return date.split(' ')[0].concat(' ').concat(date.split(' ')[1]).concat(' ').concat(date.split(' ')[2]);
  }

  const ReFormDate = (DateEntred) =>{


    return `${DateEntred.getDate()} ${DateEntred.toLocaleString('default', { month: 'short' })} ${DateEntred .getFullYear()}`;
  }


  const handleChange = (event, value) => {
    setCurrentPage(value)
  };

 
 let SortedPosts = posts.sort(function(a, b) {
    var dateA = new Date(a.reviewDate), dateB = new Date(b.reviewDate);
    if(Sorting == 'Newest first')
    {
      return dateB - dateA;
    }
     else if(Sorting == 'Oldest first'){
      return  dateA - dateB;
    }
    
  })
   
  let finalResult=[];
  let filtredData =[];
  let filterDate=[];
   if(selectedDate!== null){
           filterDate = SortedPosts.filter( (rev) =>{
          return getDateWithNoTime(rev.reviewDate).localeCompare(getDateWithNoTime(ReFormDate(selectedDate)))==0 
          }
        )
       
         filtredData = filterDate.filter(p=> filters.filter(f=>f.value).every(e =>p[e.name] == e.value) );
        
        finalResult = filtredData.length ? filtredData : filterDate ;
        
   }
   else{
    
    filtredData = SortedPosts.filter(p=> filters.filter(f=>f.value).every(e =>p[e.name] == e.value) );
  
    finalResult = filtredData.length ? filtredData : SortedPosts ;
   }
  
 
   
  const currentPosts = finalResult.slice(indexOfFirstPost, indexOfLastPost)
 

  return (
    <Grid className="App" >
      <Grid container direction="column" spacing={2} style={{paddingRight:"40px",paddingLeft:"40px"}} >
      <Grid item style={{borderBottom:"1px solid #dbdbdb"}}>
           <SearchBarTop Title="hello" onChangeProduct={(e) => {
             var index = e.nativeEvent.target.selectedIndex;
              
              setFilters(
                prevState => {
                  let obj = prevState.find(o => o.name==="appID");
                  if(obj !== undefined) {
                    obj.value = e.nativeEvent.target[index].text;
                  }
                  return [...prevState];
                }
              )
                
            }}
           onChangeSorting={(e) => {
            var index = e.nativeEvent.target.selectedIndex;
             setSorting(e.nativeEvent.target[index].text);
             
               
          }}/>
        </Grid>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={3}>
              <Grid container direction="column" style={{padding:"25px",borderRight:"1px solid #dbdbdb",margin:"0px" }}>
                  <Search  
                  onChangeSearch={(e) =>
                    
                     setFilters(
                      prevState => {
                        let obj = prevState.find(o => o.name==="reviewUserName");
                        if(obj !== undefined) {
                          obj.value =e.target.value;
                          obj.value= (obj.value).charAt(0).toUpperCase() + (obj.value).slice(1)
                        }
                        return [...prevState];
                      }
                    )
                    } 
                  onClickRating={(e) =>  
                  
                    setFilters(
                      prevState => {
                        let obj = prevState.find(o => o.name==="rating");
                        if(obj !== undefined) {
                          obj.value = e;
                        }
                        return [...prevState];
                      }
                    )
                  } 
                  onChangeDate={date => setSelectedDate(date)} Datevalue={selectedDate}
                  onClickVersion={(e) =>  
                  
                    setFilters(
                      prevState => {
                        let obj = prevState.find(o => o.name==="version");
                        if(obj !== undefined) {
                          obj.value = e;
                        }
                        return [...prevState];
                      }
                    )}
                    onClickCountry={(e) =>  
                  
                      setFilters(
                        prevState => {
                          let obj = prevState.find(o => o.name==="countryName");
                          if(obj !== undefined) {
                            obj.value = e;
                          }
                          return [...prevState];
                        }
                      )}

                      countryCountArray={ratingPerCountry}
                      filtersCountArray={ratingPerVersion}
                      starsCountArray={ratingPerStar}
                  />
              </Grid>
          </Grid>
          
         
          <Grid container direction="column" spacing={2}  xs={12} sm={9} style={{padding:"25px", paddingRight:"40px",height:"100vh"}}>
            <Grid item style={{ paddingRight:"80px",height:"76vh",overflowY:"scroll"}}>
               
                {currentPosts.map(post => (
                    <CardItem>
                       <BodyCard rating={post.rating}
                        appStorName={post.appStoreName}
                        countryname={post.countryName}
                        reviewdate={post.reviewDate}
                        reviewheading={post.reviewHeading}
                        userName={post.reviewUserName}
                        version={post.version}
                        reviewtext={post.reviewText} />
                   </CardItem>
                ))}
              
            </Grid>
            <Grid item  style={{margin:"0 auto"}}>
               <Pagination count={Math.ceil(finalResult.length/postsPerPage)} onChange={handleChange} />
            </Grid>
          </Grid>
              
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

