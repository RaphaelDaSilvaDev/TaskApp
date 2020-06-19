import React, { useRef, useContext } from 'react';
import { Container, Label } from './styles';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

function Card({ data, index, listIndex }){
    const ref = useRef();

    const { move } = useContext(BoardContext)
    
    const [{isDragging}, dragRef] = useDrag({
        item:{ type: 'CARD', index, listIndex},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor){
            if(item.index >= 0){
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggerdIndex = item.index;
            const targetIndex = index;

            if(draggerdIndex === targetIndex && draggerdIndex === targetListIndex){
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) /2;
            
            const draggerdOffset = monitor.getClientOffset();
            const draggedTop = draggerdOffset.y - targetSize.top;

            if(draggerdIndex < targetIndex && draggedTop < targetCenter){
                return;
            }

            if(draggerdIndex > targetIndex && draggedTop > targetCenter){
                return;
            }

            move(draggedListIndex, targetListIndex, draggerdIndex, targetIndex);

            if(targetIndex < 0){
                item.index = targetIndex + 1;
                
            }else{
                item.index = targetIndex;
            }
            item.listIndex = targetListIndex;
        }
    }
})

    dragRef(dropRef(ref));

    return (
        <Container ref={ref} isDragging={isDragging} notCard={data.notCard}>
            <header>
                {data.labels.map(label =>  <Label key={label} color={label}/>)}
            </header>
            <p>{data.content}</p>
            {data.user && <img src={data.user} alt=""/>}
        </Container>
    );
}

export default Card;