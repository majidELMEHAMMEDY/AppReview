
import styled from 'styled-components';
import DropDown from './DropDown'
import review from '../data/review.json';

const Container = styled.div`
 
  padding:10px;
  display: flex;
  justify-content:space-between;
  flex-grow:5;
  

`;
const Left = styled.div`
  width: 50%;
  
`;

const Right = styled.div`
  width:50%
  background:red;
  display:flex;
  flex-grow: 1;
  justify-content:flex-end;
  padding-Right:20px;
 
`
const ItemRight = styled.div`
  width:20%
`
const ItemLeft = styled.div`
  width:35%;
`
function removeDuplicates(array) {
  return array.filter((a, b) => array.indexOf(a) === b)
};

function getNames(array){
   review.forEach( element =>{
     return element.appID;
   })
}
function SearchBarTop(props){
  const apps = [];
     review.forEach( element => apps.push(element.appID) )
     console.log(apps)

    return(
            <Container >
                <Left>
                    <DropDown Title="serch prodect"
                    Options={removeDuplicates(apps)}
                    onChange={props.onChangeProduct}/>
                </Left>
                
                <Right>
                  
                <ItemLeft>
                     <DropDown Title="sorting"
                    Options={['Newest first','Oldest first']}
                    onChange={props.onChangeSorting}/>
                    
                  </ItemLeft>
                  <ItemRight>
                <DropDown Title="translation"
                    Options={['EN','FR']}/>
                </ItemRight>
                   
                </Right>
            </Container>
    )
}

export default SearchBarTop;