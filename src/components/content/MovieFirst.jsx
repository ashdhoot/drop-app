import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMyFilm } from "../../store/actions/productActions";

const MovieFirst = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.myfilm);

  useEffect(() => {
    // dispatch(getMyFilm(1));
    dispatch(getMyFilm(id));
    return () => {
      dispatch({
        type: "GET__MY__FILM",
        payload: {},
      });
    };
  }, []);

  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="card">
          <h5 className="text-center">Film name : {data.title}</h5>
          <div className="card-body">
            <p>Film Director : {data.director}</p>
            <p>Film Edited :{data.edited}</p>
            <p>Film Producer: {data.producer}</p>
            <p>Film Relesed On :{data.release_date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieFirst;
