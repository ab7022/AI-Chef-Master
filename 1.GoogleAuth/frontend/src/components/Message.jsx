import React from 'react'

const Message = ({ message, color, border }) => {
    return (
      <div className={`w-[300px] shadow-xl  text-center ${color} ${border} rounded-xl to-transparent px-16 py-2 text-white my-6`}>
        <p>{message}</p>
      </div>
    );
  }

export default Message