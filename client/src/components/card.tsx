export default function Card({
  onEditClick,
  onDeleteClick,
  modalStatus,
  xmlData,
}: any) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlData, "application/xml");
  const animeElements = xmlDoc.getElementsByTagName("anime");
  const animeData = Array.from(animeElements).map((animeElement) => {
    const seriesAnimedbId =
      animeElement.getElementsByTagName("series_animedb_id")[0].textContent;
    const myStatus =
      animeElement.getElementsByTagName("my_status")[0].textContent;
    return { seriesAnimedbId, myStatus };
  });
  return (
    <>
      {animeData.map((anime, index) => (
        <div
          key={index}
          className="rounded-md bg-dark-900 border-2 border-dark-800 p-4 space-y-3"
        >
          <img
            src="/template-art.png"
            alt="Box Art"
            className="object-cover object-center w-full rounded-md h-56"
          />
          <div className="flex flex-col space-y-4">
            <div className="space-y-2 text-center">
              <p className="text-dark-300 text-sm">{anime.seriesAnimedbId}</p>
              <h2 className="text-2xl">Anime Name</h2>
            </div>
            <div className="btn-sm">{anime.myStatus}</div>
            <div
              className={`${
                modalStatus ? "hidden" : "block"
              } grid grid-cols-2 gap-2`}
            >
              <button className="btn btn-primary m-0" onClick={onEditClick}>
                <i className="fa-solid fa-pen-to-square"></i>
                <span>Edit</span>
              </button>
              <button
                className="btn btn-light-outline m-0"
                onClick={onDeleteClick}
              >
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
