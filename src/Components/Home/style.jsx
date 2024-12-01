import styled from "styled-components";
export const MainStyle = styled.main `

width: 100%;
display: flex;
position: relative;
font-family: "Poppins", sans-serif;
@media (max-width: 500px){
            display: flex;
            width: 100%;
            justify-content: center;
            flex-direction: column;
            flex-wrap: wrap;
            
        }

.text-principal{
    flex-direction: column;

    @media (max-width:500px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
    }

.texto{
    flex-direction: column;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 100px;
    @media (max-width:500px){
        text-align: center;
        width: 100vw;
        flex-direction: column;
        justify-content: center;
        margin-left: -9px;
        background-color: #037143;
        color: white;
        font-weight: 600;
        height: 47vh;
        
        
    }
}

span{
    color: #037143;
    font-weight: 700;
    font-size: 50px;
    @media (max-width:500px){
        text-align: center;
        width: 200px;
        font-size: 2.1rem;   
        color: #0c0c0cf8;
        margin-top: 50px ;
    }
}
h2{
    font-weight: 300;
    width: 400px;
    font-size: 45px;
    margin-top: 100px;
    margin-bottom: -10px;
    @media (max-width:500px){
        text-align: center;
        margin-top: 0px;
        width: 250px;
        font-size: 1.5rem;
        font-weight: 500;
        margin-left: 60px;
        flex-direction: column;
        justify-content: center;
        color: #fcfcfc;
        
        
    }
}

p{
    font-size: 0.9rem;
    @media (max-width: 500px){
        width: 90%;
        margin-left: 15px;
    }

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
    @media (max-width: 500px){
            display: flex;
            margin-left: 20px;
            margin-bottom: -1650px;
        }
    
}
.copinhos img:hover{
    transform: translateY(-50px) rotate(10deg);
    }


button{
    border: none;
    border-radius: 20px;
    padding: 5px;
    width: 180px;
    margin-left: 100px;
    background-color: #037143;
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: large;
    @media (max-width:500px){
        border: none;
        background-color: #075534;
        margin-top: 10px;
    }
}
button:hover{
    background-color:#075534;
}

.copo-elipse{
    position:relative;
    margin-left: 300px;
    @media (max-width:500px){
        margin-top: 100px;
    }
   
    
}
.copos{
    position: absolute;
    margin-top: 100px;
    margin-left: 30px;
    width: 350px;
    z-index: 2;
    @media (max-width:500px){
        margin-left: -255px;
        margin-top: 50%;
        width: 280px;
        
    }
   
}

.elipse{
   width: 480px;
   height: 425px;
margin-top: 110px;
position: relative;
z-index: 1; 
@media (max-width:500px){
        width: 250px;
        height: 250px;
        margin-top: 150px;
        margin-left: -240px;
        transform: translateY(-50px) rotate(45deg);

    }
}


`