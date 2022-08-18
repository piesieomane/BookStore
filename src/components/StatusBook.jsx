import './StatusBook.css';

const StatusBook = () => {
  const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return (
    <div className="book_status d-flex">
      <div className="pie" />
      <div>
        <h2 className="status_pre font-mont">
          {random}
          %
        </h2>
        <h3 className="completed font-mont">Completed</h3>
      </div>
    </div>
  );
};

export default StatusBook;
