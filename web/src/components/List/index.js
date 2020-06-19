import React from 'react';
import { Container } from './styles';
import { MdAdd } from 'react-icons/md';

import Card from '../Card';


function List({ data, index:listIndex }){
    return (
        <Container done={data.done}>
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (
                    <button type="button">
                        <MdAdd size={24} color="#fff"/>
                    </button>
                )}
            </header>

            <ul>
                {data.cards.map((card, index) => <Card key={card.id} index={index} listIndex={listIndex} data={card}/>)}
                {data.cards < 1 &&
                    <Card key={-1} listIndex={listIndex} index={-1} data={{notCard: true, labels: []}}></Card>
                }
            </ul>
        </Container>
    );
}

export default List;