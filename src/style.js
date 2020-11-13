import styled from 'styled-components';
import { makeStyles,  } from '@material-ui/core/styles';



export const CardItem = styled.div`
  margin-bottom:10px;
`


export const Body = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    flex-flow: column nowrap;
    z-index: 30;
    
`
export const Item = styled.div`
    margin-bottom: 15px;
    width:100%;
    display: flex;
    heighth:25%
    
   
`
export const Stars = styled.div`
    width:50%;
`
export const Mbox = styled.div`
    width:25%;
    display:flex;
    flex-direction: column;
`
export const Number = styled.p`
    font-size:13px;
    margin:2.5px;
    color:#dbdbdb;
`
  

 export  const Container = styled.div`
 
  padding:10px;
  display: flex;
  flex-direction:column;
  
`;
export const Select = styled.select`
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
export const Title = styled.p`
       font-size:11px;
       color:gray;
       margin-left:10px;
       margin-bottom: 3px;
`

