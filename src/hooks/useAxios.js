import {useEffect, useState} from 'react'
import axios from 'axios'

export const useAxios = (call, url) => {
  const [state, setState] = useState({data: null, loading: true});

    useEffect(() => {
      setState(state => ({ data: state.data, loading: true }))
      try {
        axios.get(url)
        .then(res => {
          setState({ data: res.data, loading: false })
        })
      }
      catch(error){
        console.log(error)
      }
    }, [call, url])

    return state
}