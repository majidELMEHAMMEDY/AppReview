import {Container, Select, Title} from "../style"


function DropDown(props){
    
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