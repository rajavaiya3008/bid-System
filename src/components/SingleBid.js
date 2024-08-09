import React from 'react'
import InputField from '../shared/InputField'

const SingleBid = ({style,bid,handleChange}) => {
    console.log('bid', bid)
  return (
    <div style={{...style,display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {
            Object.keys(bid).map((id) => (
                <InputField id={id} value={bid[id]} handleChange={handleChange}/>
            ))
        }
    </div>
  )
} 

export default SingleBid