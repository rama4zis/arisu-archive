import SideMenu from "./components/SideMenu";
import Root from "./routes/root";


const App = () => {

  return (
    <>
      <div class="flex flex-row h-full">
        <div class="lg:w-64 fixed">
          <SideMenu />
        </div>
        <main class="flex-1 lg:ml-64 p-4">
          <Root />
        </main>
      </div>
      ssss

    </>

  );

}

export default App;
