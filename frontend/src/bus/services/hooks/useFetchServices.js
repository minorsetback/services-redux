import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { servicesActions } from '../actions';

export const useFetchServices = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(servicesActions.fetchAsync(id));
    }, [dispatch, id]);

    const {
        data,
        isFetching,
        error
    } = useSelector((state) => state.services);

    return {
        data,
        isFetching,
        error
    }
}