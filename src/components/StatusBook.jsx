import style from './StatusBook.module.css';

const StatusBook = () => {
  const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return (
    <div className={style.book_status}>
      <div className="pie" />
      <div>
        <h2 className={style.status_pre}>
          {random}
          %
        </h2>
        <h3 className={style.completed}>Completed</h3>
      </div>
    </div>
  );
};

export default StatusBook;
