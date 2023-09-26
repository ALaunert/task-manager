/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid #eee;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  /* padding: 0.4rem; */
  display: flex;
  gap: 0.4rem;
  /* margin-bottom: 1rem; */
  /* justify-content: space-between; */
`;

const FilterButton = styled.button`
  background-color: #fff;
  border: none;
  color: #000;
  ${(props) =>
    props.active &&
    css`
      background-color: #006dff;
      color: #fff;
    `}

  border-radius: 5px;
  font-weight: 400;
  font-size: 0.875rem;
  /* To give the same height as select */
  /* padding: 0.44rem 0.8rem; */
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: #006dff;
    color: #fff;
  }
`;
function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;
  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={option.value}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
