import styled from 'styled-components';

export const Container = styled.div`
   padding: 0 15px;
   height: 100%;
   flex: 0 0 320px;
   overflow-y: auto;


::-webkit-scrollbar {
    width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 2px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #860013; 
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #a80018; 
}

   opacity: ${props => props.done ? 0.6 : 1};

   & + div{
       border-left: 1px solid rgba(0, 0, 0, 0.05);
   }

   header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2{
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button{
            width: 42px;
            height: 42px;
            border-radius: 12px;
            background: #860013;
            border: 0;
            cursor: pointer;
        }
   }

   ul{
       margin-top: 30px;
   }
`;