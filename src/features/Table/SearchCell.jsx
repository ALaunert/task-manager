import SearchIcon from "@mui/icons-material/Search";
import { Button, TableCell, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showSearch } from "./taskTableSlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function SearchCell() {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const showSearchBar = useSelector((state) => state.taskTable.showSearchBar);
  function handleSearchClick() {
    setSearchText("");
    dispatch(showSearch());
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchText === ""
        ? searchParams.delete("search")
        : searchParams.set("search", searchText);

      setSearchParams(searchParams);

      // Send Axios request here
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText, searchParams, setSearchParams]);

  return (
    <TableCell
      sx={{
        marginTop: 0.4,
        padding: 1,
        display: "flex",
        alignItems: "center",
        gap: 2,
        border: "none",
      }}
    >
      <Button
        sx={{ padding: 0.5, minWidth: 25, flexShrink: 0 }}
        variant="contained"
        size="small"
        onClick={handleSearchClick}
      >
        <SearchIcon fontSize="small" />
      </Button>
      {showSearchBar && (
        <TextField
          type="text"
          size="small"
          placeholder="Please enter your task"
          fullWidth
          inputProps={{
            style: {
              height: "12px",
            },
          }}
          autoFocus
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></TextField>
      )}
    </TableCell>
  );
}

export default SearchCell;
