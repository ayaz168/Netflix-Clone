import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store";

export default function SelectGenre({genres,type}) { //destructure the genres param
    const dispatch = useDispatch();
  return (
    <Select
      className="flex"
      onChange={(e) => {
        dispatch(
          fetchDataByGenre({
            genres,
            genre: e.target.value,
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}
const Select=styled.select`
margin-left: 3rem;
padding:0.25rem;
cursor: pointer;
font-size: 1.4rem;
background-color: rgba(0, 0, 0, 0.8);
color: white;
`;
