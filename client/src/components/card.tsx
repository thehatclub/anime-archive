export default function Card({ onEditClick, onDeleteClick, xmlData }: any) {
  return (
    <>
      {xmlData.list.folder.map((folder) => {
        return folder.data.map((anime) => {
          return anime.item.map((item) => {
            return (
              <div
                key={item.link[0]}
                className="rounded-md bg-dark-900 border-2 border-dark-800 p-4 space-y-3 title-w"
              >
                <a href={item.link[0]} target="_blank">
                  <img
                    src="https://placehold.co/281x400"
                    alt="Box Art"
                    className="object-cover object-center w-full rounded-md h-56"
                  />
                </a>
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2 text-center">
                    <h2 className="text-xl truncate">{item.name[0]}</h2>
                  </div>
                  <div className="btn-sm">{folder.name[0]}</div>
                  <div className={"grid grid-cols-2 gap-2"}>
                    <button
                      className="btn btn-primary m-0"
                      onClick={onEditClick}
                    >
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
            );
          });
        });
      })}
    </>
  );
}
