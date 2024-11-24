import styled from "styled-components";
export const MainStyle = styled.main `

width: 100%;
display: flex;
position: relative;
font-family: "Poppins", sans-serif;


.text-principal{
    flex-direction: column;
    }

.texto{
    flex-direction: column;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 100px;

}

span{
    color: #037143;
    font-weight: 700;
    font-size: 50px;
}
h2{
    font-weight: 300;
    width: 400px;
    font-size: 45px;
    margin-top: 100px;
    margin-bottom: -10px;
}

p{
    font-size: 0.9rem;
}
.copinhos{ 
    flex-direction: row;
    margin-top: 25px;
    margin-left: 600px;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    transition: transform 0.3s ease, margin 0.3s ease;
    
}
.copinhos img:hover{
    transform: translateY(-50px) rotate(10deg);
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
    background-color:#075534 ;
}

.copo-elipse{
    position:relative;
    margin-left: 300px;
    
}
.copos{
    position: absolute;
    margin-top: 100px;
    margin-left: 30px;
    width: 350px;
    z-index: 2;

   
}

.elipse{
   width: 480px;
   height: 425px;
margin-top: 110px;
position: relative;
z-index: 1; 
}
`