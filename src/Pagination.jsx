function Pagination({ gotoNextPage, gotoPreviousPage }) {
    return (
      <div>
        {gotoPreviousPage && <button onClick={gotoPreviousPage}>Previous</button>}
        <button onClick={gotoNextPage}>Next</button>
      </div>
    )
  }
  
  export default Pagination