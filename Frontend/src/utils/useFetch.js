import { useEffect, useState } from "react";
import { deleteRequest, getRequest, postRequest, putRequest } from './apiRequest'

const useFetch = (method, route, payload = null, params = null) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res;
                switch (method) {
                    case 'get':
                        res = await getRequest(route, params);
                        break;
                    case 'post':
                        res = await postRequest(route, payload);
                        break;
                    case 'put':
                        res = await putRequest(route, payload);
                        break;
                    case 'delete':
                        res = await deleteRequest(route);
                        break;
                    default:
                        break;
                }

                if (!res?.status) {
                    setError(res.message);
                }
                else {
                    setData(res?.data);
                }

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    }, [])

    return {
        loading,
        error,
        data
    }

}

export { useFetch }