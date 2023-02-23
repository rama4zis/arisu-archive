const CharactersPage = () => {
  let characters = [];

  for (let i = 0; i < 25; i++) {
    characters.push(
      <div className="avatar flex flex-col">

        <div className="w-32 rounded relative">
          <img src="https://static.miraheze.org/bluearchivewiki/thumb/6/63/Shiroko.png/266px-Shiroko.png" />
          <div className="absolute top-0 right-0 w-6 h-6">
            <img className="" src="https://paimon.moe/images/elements/pyro.png" />
          </div>
        </div>

        <p className="text-white text-center font-bold">Shiroko</p>

      </div>
    );
  }

  return (
    <>
      <h1 class="text-xl font-bold mb-8">Characters</h1>

      {/* filter  */}
      

      <div class="flex gap-4 w-full flex-wrap">
        {characters}
      </div>
    </>
  );
};

export default CharactersPage;
