import React, {useState} from 'react';
import Products from '../Products.js'



function Search() {
    const [data, setData] = useState(Products);
    const filterResult=(categoryItem)=>{const result=Products.filter((currentData)=>{return currentData.category===categoryItem;
    }); setData(result);}
  return (
    <div className='Search container-fluid mx-2'>
                            <div className="col-md-3 row mt-5 mx-2">


<div class="list-group" id="list-tab" role="tablist">
<a class="list-group-item list-group-item-action active" id="list-home-list" onClick={()=>filterResult('Men')} data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Men</a>
<a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Women')}>Women</a>
<a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Children')}>Children</a>
<a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Electronics')}>Electronics</a>
<a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Fashion')}>Fashion</a>
<a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages" onClick={()=>setData(Products)}>All</a>
</div>


</div>

<div class="col-md-9 card_row ">
                        <div class="row rowz col-md-4 mb-4 card_row ">
    {Products.map((val,key)=> {
        return <div> {val.title}</div>;
        
    })}

</div>
</div>

    </div>
  )
}

export default Search