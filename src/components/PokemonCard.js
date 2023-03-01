import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, frontImg, backImg}) {

  const [isFront, setIsFront] = useState(true);

  function flipCard(){
    setIsFront(!isFront)
  }
  return (
    <Card>
      <div onClick={flipCard}>
        <div className="image">
          {isFront ? <img src={frontImg} alt="oh no!" /> : <img src={backImg} alt="oh no!" />}
        </div>
        <div className="content">
          <div className="header"> {name} </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
