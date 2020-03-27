import React from "react";

export default function BuySell() {
    const [buy, setBuy] = useState({})
    const [sell, setSell] = useState({})

function handleBuy(e){
    setBuy(e.target.value)
}
function handleSell(e){
    setSell(e.target.value)
}

  return (
    <div>
      
    </div>
  );
}
