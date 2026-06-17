import classes from './Notification.module.css'


const Notification = ({ status, title, message }) => {
    console.log(status,title,message)
  return (
    <div className={`${classes.notification} ${classes[status]}`}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};


export default Notification;