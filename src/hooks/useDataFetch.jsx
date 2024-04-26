import { useEffect, useState } from 'react';
import axios from 'axios';

export const EndPoint = import.meta.env.VITE_SERVER_ENDPOINT;

export const useDataFetch = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const GET_DATA = async (url) => {
        setLoading(true);
        try {
            const response = await axios.get(`${EndPoint}${url}`);
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
            throw error;
        }
    };

    const GET_DATA_WITH_PATHPARAMS = async (url, pathParams) => {
        setLoading(true);
        try {
            const response = await axios.get(`${EndPoint}${url}`, { params: pathParams });
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
            throw error;
        }
    };

    const POST_DATA_WITH_BODYPARAMS = async (url, bodyParams) => {
        setLoading(true);
        try {
            const response = await axios.post(`${EndPoint}${url}`, bodyParams);
            setLoading(false);
            return response.data;
        } catch (error) {
            setLoading(false);
            setError(error);
            throw error;
        }
    };


    return {
        loading,
        error,
        GET_DATA,
        GET_DATA_WITH_PATHPARAMS,
        POST_DATA_WITH_BODYPARAMS,
    };
};