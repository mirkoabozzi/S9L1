import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import DescriptionComponent from "./components/DescriptionComponent";
import ImageClassComponent from "./components/ImageClassComponent";
import NavbarComponent from "./components/NavBarComponent";
import TitleComponent from "./components/TitleComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent></NavbarComponent>
      <header className="container">
        <TitleComponent text="Spiaggia" className="text-secondary"></TitleComponent>
        <ImageClassComponent
          src="https://images.unsplash.com/photo-1591103000599-50f5b4ec7d3d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sardegna"
          style={{ width: "100%" }}
        />
        <DescriptionComponent
          textDescription="A nord dell’isola di Budelli risplende una spettacolare piscina naturale, è uno dei paradisi protetti dell’arcipelago maddalenino, nell’estremo nord-est della Sardegna."
          className="text-secondary mt-1"
        ></DescriptionComponent>
        <a href="https://unsplash.com/it/foto/persone-che-nuotano-sulla-spiaggia-durante-il-giorno-G5MRCi0qRog">
          <ButtonComponent name="Scopri di più" className="btn btn-primary my-2 px-5" />
        </a>
      </header>
      <body className="container">
        <ImageClassComponent
          src="https://images.unsplash.com/photo-1558508006-b47365cf0e61?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Roccia"
          style={{ width: "400px" }}
          className="rounded my-3"
        ></ImageClassComponent>
        <a href="https://unsplash.com/it/foto/montagna-grigia-e-verde-accanto-al-mare-durante-il-giorno-P5c4vJyWDFc">
          <ButtonComponent name="Visita" className="btn btn-primary my-2 px-5 d-block mx-auto" />
        </a>
      </body>
    </div>
  );
}

export default App;
