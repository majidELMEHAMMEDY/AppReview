import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import SearchBarTop from "./components/SearchBarTop"
import Search from "./components/Search"
import BodyCard from "./components/Card"
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';

import review from './data/review.json';


const CardItem = styled.div`
  margin-bottom:10px;
`

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [SelectedProduct, setSelectedProduct] = useState('');
  const [Sorting, setSorting] = useState('Newest first');
 // const [Version, setVersion] = useState(0);
  const [Searchbar, setSearchbar] = useState('');
  const [Rating, setRating] = useState(0);
  const [selectedDate, setSelectedDate] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(()=> {
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(review);
      setLoading(false);
    }

    fetchPosts();
    
  })
  

  //Get current posts
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  const lowercasedFilter = Searchbar.toLowerCase();
  let currentPosts =[];

  const handleChange = (event, value) => {
    setCurrentPage(value)
  };

 let filterPosts = posts.filter(
    (rev) => {
      if(Rating === 0){
        return rev.appID === SelectedProduct &&  (rev.countryName.toLowerCase().indexOf(Searchbar.toLowerCase()) !== -1 || rev.reviewUserName.toLowerCase().indexOf(Searchbar.toLowerCase()) !== -1); 
      }
      return  rev.appID === SelectedProduct && rev.rating == Rating  && (rev.countryName.toLowerCase().indexOf(Searchbar.toLowerCase()) !== -1 || rev.reviewUserName.toLowerCase().indexOf(Searchbar.toLowerCase()) !== -1);
      
    }
  )
  
 
 let SortedPosts = filterPosts.sort(function(a, b) {
  var dateA = new Date(a.reviewDate), dateB = new Date(b.reviewDate);
  if(Sorting == 'Newest first')
  {
    return dateB - dateA;
  }
   else if(Sorting == 'Oldest first'){
    return  dateA - dateB;
  }
  
})
currentPosts = SortedPosts.slice(indexOfFirstPost, indexOfLastPost)
console.log(Rating)
if(SelectedProduct == '')
{
   filterPosts = posts.filter(
    (rev) => {
      if(Rating == 0){
       
        return  (rev.countryName.toLowerCase().indexOf(Searchbar.toLowerCase()) !== -1 || rev.reviewUserName.toLowerCase().indexOf(Searchbar.toLowerCase()) !== -1); 
      }
      return  rev.rating == Rating  && (rev.countryName.toLowerCase().indexOf(Searchbar.toLowerCase()) !== -1 || rev.reviewUserName.toLowerCase().indexOf(Searchbar.toLowerCase()) !== -1);
      
    }
  )
 
  SortedPosts = filterPosts.sort(function(a, b) {
    var dateA = new Date(a.reviewDate), dateB = new Date(b.reviewDate);
    if(Sorting == 'Newest first')
    {
      return dateB - dateA;
    }
     else if(Sorting == 'Oldest first'){
      return  dateA - dateB;
    }
    
  })

 console.log(selectedDate)

  currentPosts = SortedPosts.slice(indexOfFirstPost, indexOfLastPost)
}
  return (
    <div className="App" >
      <Grid container direction="column" spacing={2} style={{paddingRight:"40px",paddingLeft:"40px"}} >
      <Grid item style={{borderBottom:"1px solid #dbdbdb"}}>
           <SearchBarTop Title="hello" onChangeProduct={(e) => {
             var index = e.nativeEvent.target.selectedIndex;
              setSelectedProduct(e.nativeEvent.target[index].text);
                
           } } 
           onChangeSorting={(e) => {
            var index = e.nativeEvent.target.selectedIndex;
             setSorting(e.nativeEvent.target[index].text);
               
          }}/>
        </Grid>
        <Grid container spacing={2} >
          <Grid item xs={12} sm={3}>
              <Grid container direction="column" style={{padding:"25px",borderRight:"1px solid #dbdbdb",margin:"0px" }}>
                  <Search  onChangeSearch={(e) => setSearchbar(e.target.value)} onClickRating={(e) => setRating(e.target.value)} onChangeDate={handleDateChange} Datevalue={selectedDate}/>
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
               <Pagination count={Math.trunc(SortedPosts.length/postsPerPage)} onChange={handleChange} />
            </Grid>
          </Grid>
              
        </Grid>
      </Grid>
    </div>
  );
}

export default App;


/**
 *  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}
 */

