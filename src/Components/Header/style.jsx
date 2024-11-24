import styled from "styled-components";

export const HeaderStyle = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

    display: flex;
    justify-content: space-around;
    gap: 600px;
    align-items: center;
    


    ul{
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        gap: 60px;
        margin-right: 144px;
        font-family: "Poppins", sans-serif;
        
    }

    a{
        text-decoration: none;
        color: black;
        
        &:hover {
            color: #037143;
        }
    }

    img{
        width: 80px;
        margin-left: 100px;
        margin-top: 20px;
    }

`
