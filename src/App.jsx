import Entry from "./components/Entry";
import Header from "./components/Header";
import "./index.css";
import info from "./info.js";

function App() {
  const entryElements = info.map((entry) => {
    return (
      <Entry
        key={entry.id}
        img={entry.img}
        country={entry.country}
        map={entry.map}
        place={entry.place}
        date={entry.date}
        info={entry.info}
      />
    );
  });
  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}

export default App;
