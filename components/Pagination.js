import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button onClick={onLeftClick} className="button-pagination">
        <div>
          <span role="img" aria-label="left">
            ⬅
          </span>
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick} className="button-pagination">
        <div>
          <span role="img" aria-label="right">
            ➡
          </span>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
