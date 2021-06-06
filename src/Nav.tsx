import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavContainer = styled.div`
    height: 10vh;
    width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
`

export default function Nav() {

    return (
        <NavContainer>
           <Link to='/states'>States</Link>
           <Link to='/people'>Composers</Link>
           <Link to='/animals'>Animals</Link>     
        </NavContainer>
    )
}