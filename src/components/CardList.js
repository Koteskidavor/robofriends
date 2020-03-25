import React from 'react';
import Card from "./Card";

const CardList = ({robots}) => {
   
    return (
        <div>
            {
                robots.map((tst, i) => {
                    return ( <Card
                            key={i}
                            id={tst.id}
                            name={tst.name}
                            email={tst.email} />
                    );
                })
            }
        </div>
    );

}
export default CardList;
