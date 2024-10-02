import React, { useState, useMemo, Fragment, useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  Pagination,
  Checkbox,
  TableSortLabel,
} from "@mui/material";

import styles from "./Table.module.scss";
import { ThemeContext } from "../../../context/ThemeContext";

function DynamicTable({
  columns,
  rows,
  enableSearch = false,
  enableSorting = false,
  enablePagination = false,
  enableCheckbox = false,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [selectedRows, setSelectedRows] = useState([]);
  const {themeMode} = useContext(ThemeContext);
  

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const matchesSearchTerm = enableSearch
        ? Object.keys(row).some((key) =>
            row[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
          )
        : true;

      return matchesSearchTerm;
    });
  }, [searchTerm, rows, enableSearch]);

  const sortedRows = useMemo(() => {
    const sortedData = [...filteredRows];
    if (enableSorting && sortConfig.key) {
      sortedData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  }, [filteredRows, sortConfig, enableSorting]);

  const handleSort = (columnId) => {
    if (!enableSorting) return;
    let direction = "asc";
    if (sortConfig.key === columnId && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key: columnId, direction });
  };

  const handleSelectRow = (row) => {
    const isSelected = selectedRows.includes(row);
    if (isSelected) {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow !== row)
      );
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.length === sortedRows.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(sortedRows);
    }
  };

  const isSelected = (row) => selectedRows.includes(row);
  const isAllSelected =
    selectedRows.length === sortedRows.length && sortedRows.length > 0;

  const tableText ={
    backgroundColor: 'transparent',
    color : 'var(--text-color)'
  }

  return (
    <>
      
        { enableSearch && (
          <div className={styles.tableMain}>
          <Fragment>
            <div className="d-flex column-gap-10">
              <img src="/images/create.png" height={20} alt="actions" />
              <img src="/images/fliter-view.png" height={20} alt="filter" />
              <img src="/images/sort.png" height={20} alt="sort" />
            </div>
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <TextField
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                size="small"
                style={{ height: "30px", width: "200px"}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src="/images/search.png"
                        alt="search"
                        style={{ width: 15, height: 15, filter: "brightness(0)" }}
                      />
                    </InputAdornment>
                  ),  
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      borderColor: "black",
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black", 
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black", 
                      },
                      backgroundColor: "white",
                      color: "black", 
                    },
                    "& .MuiInputAdornment-root": {
                      color: "black", 
                    },
                    "& .MuiInputBase-input": {
                      color: "black", 
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", 
                    },
                  },
                }}
                inputProps={{
                  style: { color: "black" }, 
                }}
              />
            </div>
          </Fragment>
          </div>
        )}

      <TableContainer
        component={Paper}
        elevation={0}
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <Table style={{ border: "none" }}>
          <TableHead>
            <TableRow style={{ borderBottom: "none" }}>
              {enableCheckbox && (
                <TableCell
                  padding="checkbox"
                  style={{
                    backgroundColor: "transparent",
                    color: "rgba(28,28,28,0.4)",
                  }}
                >
                  <Checkbox
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < sortedRows.length
                    }
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    sx={{
                      color: 'black',
                      '&.Mui-checked': {
                        color: 'black',
                      },
                    }}
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    backgroundColor: "transparent",
                    color: "rgba(28,28,28,0.4)",
                  }}
                >
                  {enableSorting ? (
                    <TableSortLabel
                      active={sortConfig.key === column.id}
                      direction={sortConfig.direction}
                      onClick={() => handleSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row, rowIndex) => (
              <TableRow key={rowIndex} selected={isSelected(row)}>
                {enableCheckbox && (
                  <TableCell
                    padding="checkbox"
                    style={{
                      backgroundColor: "transparent",
                      borderBottom: "none",
                    }}
                  >
                    <Checkbox
                      checked={isSelected(row)}
                      onChange={() => handleSelectRow(row)}
                      sx={{
                        color: 'black',
                        '&.Mui-checked': {
                          color: 'black',
                        },
                      }}
                    />
                  </TableCell>
                )}
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{
                      backgroundColor: "transparent",
                      borderBottom: "none",
                    }}
                  >
                    <span className={`${styles.cellData} ${themeMode === 'dark'? styles.dark :styles.light}`}>
                      {column.render ? column.render(row) : row[column.id]}
                    </span>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {enablePagination && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Pagination count={5} />
        </div>
      )}
    </>
  );
}

export default DynamicTable;
