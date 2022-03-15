import React, { useState } from 'react';
import ItemList from './ItemList';


const ItemListContainer = () => {
    const [cardsArray, setCardsArray] = useState([
        {
            id: 10000020,
            name: "Slifer the Sky Dragon",
            type: "Effect Monster",
            desc: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. Gains 1000 ATK/DEF for each card in your hand. If a monster(s) is Normal or Special Summoned to your opponent's field in Attack Position: That monster(s) loses 2000 ATK, then if its ATK has been reduced to 0 as a result, destroy it.",
            atk: 0,
            def: 0,
            level: 10,
            race: "Divine-Beast",
            attribute: "DIVINE",
            archetype: "Egyptian God",
            image_url: "https://storage.googleapis.com/ygoprodeck.com/pics/10000020.jpg"
        },
        {
            id: 10000000,
            name: "Obelisk the Tormentor",
            type: "Effect Monster",
            desc: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Neither player can target this card with card effects. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. You can Tribute 2 monsters; destroy all monsters your opponent controls. This card cannot declare an attack the turn this effect is activated.",
            atk: 4000,
            def: 4000,
            level: 10,
            race: "Divine-Beast",
            attribute: "DIVINE",
            archetype: "Egyptian God",
            image_url: "https://storage.googleapis.com/ygoprodeck.com/pics/10000000.jpg"
        },
        {
            id: 10000010,
            name: "The Winged Dragon of Ra",
            type: "Effect Monster",
            desc: "Cannot be Special Summoned. Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, other cards and effects cannot be activated. When this card is Normal Summoned: You can pay LP so that you only have 100 left; this card gains ATK/DEF equal to the amount of LP paid. You can pay 1000 LP, then target 1 monster on the field; destroy that target.",
            atk: 0,
            def: 0,
            level: 10,
            race: "Divine-Beast",
            attribute: "DIVINE",
            archetype: "Egyptian God",
            image_url: "https://storage.googleapis.com/ygoprodeck.com/pics/10000010.jpg"
        }
    ])
    return (
        <div className='itemListContainer'>
            <ItemList cardList={cardsArray} />
        </div>
    )
};
export default ItemListContainer;