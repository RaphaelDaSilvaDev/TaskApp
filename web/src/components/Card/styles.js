import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${props => !props.notCard && css`
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    cursor: grab;

    header{
        position: absolute;
        top: -30px;
        left: 15px;
    }

    p{
        font-weight: 500;
        line-height: 20px;
    }
    
    img{
       width: 24px;
       height: 24px;
       border-radius: 2px;
       margin-top: 5px;
   }

   ${props => props.isDragging && css`
        border: 2px dashed rgba(0, 0, 0, 0.2);
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        cursor: grabbing;

        p, img, header{
            opacity: 0;
        }
   `}
    
`} 
    ${props => props.notCard && css`
        background: transparent;
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0);
        border-top: 20px solid rgba(0, 0, 0, 0);
        padding: 90% 0;
    `}
`;

export const Label = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background: ${props => props.color};
`;