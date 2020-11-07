

import styled from 'styled-components';

const Container = styled.div`
 
  padding:10px;
  display: flex;
  flex-direction:column;
  
`;
const Select = styled.select`
  width: 100%;
  height:25px;
  background: transparent;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border:1px solid #dbdbdb;
  border-radius: 3px;
  margin-left: 10px;

       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
`;
const Title = styled.p`
       font-size:11px;
       color:gray;
       margin-left:10px;
       margin-bottom: 3px;
`

var i;
function DropDown(props){
    console.log(props.Options)
    const {Options =[]} = props;
    return(
            <Container >
                <Title>{props.Title}</Title>
                 <Select onChange={props.onChange}>
                        {Options.map(element => <option value="" >{element}</option>)}
                </Select>
            </Container>
    )
}

export default DropDown;