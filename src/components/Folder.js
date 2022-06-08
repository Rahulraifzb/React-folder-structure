import React, { useState } from 'react'

const Folder = ({explorer}) => {
    const [expand,setExpand] = useState(false)

    if(explorer.isFolder){
        return (
            <div>
                <span onClick={() => setExpand(!expand)}>{explorer.name}</span>

                <div style={{display:expand?"block":"none",paddingLeft:"12px",paddingTop:"3px"}}>
                    {
                        explorer.items.map((exp,index) => (
                            <Folder explorer={exp} key={index} />
                        ))
                    }
                </div>
            </div>
        )
    }else{
        return (
            <div style={{paddingTop:"3px"}}>
                <span>{explorer.name}</span>
            </div>
        )
    }
}

export default Folder