import styled from 'styled-components';
import { PrimaryButton } from "./Button";

const PackButton = ({children}) => {
    return (
        <Button>
            {children}
        </Button>
    )
}

const Button = styled(PrimaryButton)`
    background-color: 

    
    &:active {

    }
    &:hover {

    }
`;

// ${props => getButtonStyles(props.active)}

export default PackButton;