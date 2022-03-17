import React from 'react';
import { auth } from "./../../libs/firebase"
import {Login} from '../../components/login';
import styled from 'styled-components';

const Toggle = styled.aside

function LoginPage(props) {
    return (
        <>

        <Login/>

        </>
        
     );
}

export default LoginPage;