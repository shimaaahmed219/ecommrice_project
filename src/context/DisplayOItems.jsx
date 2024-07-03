/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext()


const DataProvider = ({ cheldrin }) => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/NameCtegory')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data', error));
    }, [])
    return (
        <dataContext.Provider value={data}>
            {cheldrin}
        </dataContext.Provider>
    )

}
export default DataProvider