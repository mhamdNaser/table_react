const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-between items-center px-3">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border bg-blocks-color disabled:opacity-50"
      >
        Previous
      </button>
      <span className="flex gap-4 px-4">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border bg-blocks-color disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
