import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { apiRequestPosts } from '../../redux';

const TestApiRequest = () => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(apiRequestPosts());
  }, [dispatch]);

  return (
    <div><button onClick={onClick}>Request</button></div>
  )
}

export default TestApiRequest;