import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyCharacter, getMyFilm } from "../store/actions/productActions";
import { Link, useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  const dispatch = useDispatch();

  const data = useSelector((state) => state.product.character);

  useEffect(() => {
    dispatch(getMyCharacter(id));
    return () => {
      dispatch({
        type: "GET__CHARACTER",
        payload: {},
      });
    };
  }, []);

  useEffect(() => {
    setCharacter(data);
  }, [data]);

  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="card">
          <h4>Name of the character :{character.name}</h4>
          <div className="card-body">
            <p>Birth Year : {character.birth_year}</p>
            <p>Gender : {character.gender}</p>
            <div className="d-flex justify-content-between">
              <p>
                You can choose for different films done by him by using
                dropdown:
              </p>
              <li className="nav-item dropdown" style={{ listStyle: "none" }}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={`/movie/${1}`}>
                      Movie 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/movie/${2}`}>
                      Movie 2
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/movie/${3}`}>
                      Movie 3
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/movie/${4}`}>
                      Movie 4
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
