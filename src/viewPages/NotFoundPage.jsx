import Error404 from "../images/error404.jpg";

const NotFoundPage = () => {
  return (
    <div>
      <img className="error" src={Error404} alt='Error404'></img>
    </div>
  )
}

export default NotFoundPage