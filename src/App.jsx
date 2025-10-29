import Entry from "./components/Entry";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <div className="entry">
        <Entry
          img="/dolomites.png"
          ialt="dolomites image"
          country="ITALY"
          map="https://maps.app.goo.gl/8pMFsDtNYXqVyodX7"
          place="Dolomites"
          date="11 Dec, 2025 - 18 Dec, 2025"
          info="The Dolomites in Italy are famous for their breathtaking mountain
              scenery, which is a UNESCO World Heritage site, and for outdoor
              activities like skiing, hiking, and climbing. They are known for
              their jagged, pale peaks, lush valleys, and turquoise lakes, and
              attract visitors year-round for winter sports and summer
              adventures. The region also features unique cultural aspects, such
              as its blend of Italian and Austrian influences. Some of the
              closest major cities to the Dolomites are Venice, Milan, and
              Verona in Italy, and Innsbruck in Austria."
        />
        <Entry
          img="/lake-pukaki.png"
          ialt="lake pukaki image"
          country="NEW ZEALAND"
          map="https://maps.app.goo.gl/Apgd8UYTPFC4Mzkq5"
          place="Lake Pukaki"
          date="12 Feb, 2026 - 24 Feb, 2026"
          info="Lake Pukaki is a large, stunning alpine lake in New Zealand's
              South Island, famous for its vibrant turquoise color and views of
              Aoraki/Mount Cook. The color comes from glacial flour finely
              ground rock particles from glaciers that reflect sunlight. It is a
              key part of New Zealand's hydroelectric power system, a cultural
              site for the Ngāi Tahu people, and a popular spot for scenic
              drives, photography, hiking, and cycling along parts of the Alps 2
              Ocean Cycle Trail. Lake Pukaki formed when the terminal moraines
              of recording glaciars blocked the valley, forming a moraine-dammed
              lake."
        />
        <Entry
          img="/dunluce-castle.png"
          ialt="dunluce castle image"
          country="IRELAND"
          map="https://maps.app.goo.gl/5wFet3bEZuvKYkcC9"
          place="Dunluce Castle"
          date="27 Apr, 2026 - 8 May, 2026"
          info="Dunluce Castle is a ruined medieval castle in Northern Ireland,
              perched on a cliff edge in County Antrim. It has a long history,
              with the current ruins dating mainly from the 16th and 17th
              centuries after being built by powerful families like the
              MacQuillans and later the MacDonnells. Visitors can tour the
              ruins, explore archaeological exhibits, and see its location
              featured in shows like <b>Game of Thrones</b>. Dunluce is one of
              the most picturesque and romantic of Irish Castles. It is situated
              on a dramatic basalt rock outcropping that is connected to the
              mainland by a bridge."
        />
        <Entry
          img="/bora-bora.png"
          ialt="bora bora image"
          country="French Polynesia (PO)"
          map="https://maps.app.goo.gl/LgNc4xkMUqHbJ5786"
          place="Bora Bora"
          date="25 Jun, 2026 - 05 Jul, 2026"
          info="Bora Bora is a small South Pacific island northwest of Tahiti in
              French Polynesia. Surrounded by sand-fringed motus and a turquoise
              lagoon protected by a coral reef, its known for its scuba diving.
              It's also a popular luxury resort destination where some guest
              bungalows are perched over the water on stilts. At the island's
              center rises Mt. Otemanu, a 727m dormant volcano. The main
              attraction of Bora Bora is the lagoon with its still intact
              underwater world. Using glass bottom boats, diving, and
              snorkeling, tourists can explore the reef with thousands of
              colorful coral fish. The group of islands belongs to French
              Polynesia and are a collectivity of France."
        />
        <Entry
          img="/santorini.png"
          ialt="santorini image"
          country="Greece"
          map="https://maps.app.goo.gl/WMvnNbt24xpjkY3v7"
          place="Santorini"
          date="12 Aug, 2026 - 19 Aug, 2026"
          info="Santorini is a Greek volcanic island in the Aegean Sea, famous for
              its stunning views of the caldera, iconic whitewashed buildings
              with blue domes perched on cliffs, spectacular sunsets, and unique
              volcanic beaches. The island is a popular tourist destination with
              attractions like hiking, local wine, and beautiful sea views.
              Santorini is one of the most romantic destinations in the world
              and is a goto destination for newly wed couples. There's more to
              this island than catching the sunset in Oia: Lounge by the black
              sand Kamari Beach, explore ancient Akrotiri, or hop on a boat tour
              to visit Nea Kameni."
        />
      </div>
    </>
  );
}

export default App;
