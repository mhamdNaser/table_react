const RowsPerPage = ({
  rowsPerPage,
  onRowsPerPageChange,
  filteredDataLength,
}) => {
  return (
    <select
      value={rowsPerPage}
      onChange={(e) => onRowsPerPageChange(parseInt(e.target.value))}
      className="p-2 bg-blocks-color"
    >
      {[5, 10, 25, 50, 100, filteredDataLength].map((size) => (
        <option key={size} value={size}>
          {size === filteredDataLength ? "All" : size}
        </option>
      ))}
    </select>
  );
};

export default RowsPerPage;
