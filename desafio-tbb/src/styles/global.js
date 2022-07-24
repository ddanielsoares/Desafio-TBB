import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
body{
    background: #F8F9FA;
}
h1{
    color: #FF577F;
}
h2, h3, h4, h5, h6, button{
    color: #121214;
}
button{
    background-color: #FF577F;
    width: 100%;
    height: 40px;
}
label,input{
    color: #121214;
}
span{
    color: #868E96;
}
input, select{
    background: #343B41;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    color: #868E96;
    padding-left: 15px;
}
`;