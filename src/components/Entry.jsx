export default function Entry(props) {
  return (
    <>
      <article className="entry-journal">
        <img src={props.img.src} alt={props.img.alt} />
        <div>
          <div className="upper">
            <i class="fa-solid fa-location-dot" />
            <span>{props.country}</span>
            <a href={props.map}>View on Google Maps</a>
          </div>
          <div className="lower">
            <h1>{props.place}</h1>
            <span>{props.date}</span>
            <p>{props.info}</p>
          </div>
        </div>
      </article>
    </>
  );
}
