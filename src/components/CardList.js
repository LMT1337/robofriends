import React from "react";
import Card from "./Card"

const CardList = ({robots}) => {
    return (
        <div>
            {robots.map((robots, i) => {
                return (
                    <Card
                    key={i}
                    id={robots.id}
                    name={robots.name}
                    email={robots.email}
                    />
                )
            })
        }
        </div>
    )
}
export default CardList;