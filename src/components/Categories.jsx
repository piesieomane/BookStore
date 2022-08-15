import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatusBook } from '../redux/categories/categories';

const Categories = () => {
  const alert = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const checkStatus = () => {
    dispatch(checkStatusBook());
  };
  return (
    <div>
      <button type="button" onClick={checkStatus}>
        Check Status
      </button>
      <h5>{alert}</h5>
    </div>
  );
};

export default Categories;
