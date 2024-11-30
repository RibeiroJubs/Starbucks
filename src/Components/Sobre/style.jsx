import styled from "styled-components";


export const SectionTwoStyle = styled.section`
width: 100%;
height: 80vh;
display: flex;
align-items: center;
justify-content: space-around;
font-family: "Poppins", sans-serif;
@media (max-width:500px){
        flex-direction: column;
    }

.texto{
    flex-direction: column;
    width: 30%;
    padding: 10px;
    display: flex;
    justify-content: center;
   margin-left: 100px;
   gap: 10px;
   @media (max-width:500px){
        width: 340px;
        margin-left: -5px;

    }
}

img{
    width: 350px;
}
h2{
    font-size: 43px;
    font-weight: 400;
    font-style: normal;
    margin-bottom: -10px;
}

h3{
    margin-bottom: -40px;
    font-weight: 600;
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
    @media (max-width:500px){
        width: 340px;
    }
}

button:hover{
    background-color:#075534;
}
`