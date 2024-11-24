import styled from "styled-components";
export const SectionStyle = styled.section `

background-color: #1e3932;
width: 100%;
height: 80vh;
color: white;
display: flex;
align-items: center;
justify-content: space-around;
font-family: "Poppins", sans-serif;

.texto{
    flex-direction: column;
    width: 30%;
    padding: 10px;
    display: flex;
    justify-content: center;
    
}

img{
    width: 400px;
}

h2{
    font-size: 43px;
    font-weight: 400;
    font-style: normal;
    margin-bottom: -10px;
}

h3{
    margin-bottom: -40px;
    font-weight: 300;
    font-size: 0.8rem;
}

button{
    border: none;
    border-radius: 20px;
    padding: 5px;
    width: 180px;
    background-color: #037143;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: large;
}

button:hover{
    background-color:#075534;
}
`