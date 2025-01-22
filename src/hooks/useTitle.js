import React, { useEffect } from 'react'

const useTitle = (title) => {
    useEffect(()=>{
      document.title=`${title} - FlowBite`;
    }

    );
  return null;
}

export default useTitle
