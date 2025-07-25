import React, { useState } from 'react'

function Mycomponent(){
  return <div>My Component is Mounted</div>
}


export default function Session() {
    const[mount, setMount]=useState(true)

    return (
    <div>
        <button onClick={(e) => setMount(!mount)}>{mount ? 'Mount' : 'Unmount'}</button>
        {mount && <Mycomponent/>}
    </div>
  )
}
