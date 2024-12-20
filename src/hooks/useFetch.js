import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (endpoint) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const feachData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(endpoint)
            setLoading(false)
            setData(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        feachData()
    },[])

    return { data, loading }
}

export default useFetch