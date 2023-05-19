import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import { notes } from "./notes";

function createNote(e) {
  return <Note key={e.id} title={e.title} content={e.content} />;
}

function App() {
  return (
    <>
      <Header />
      <div>{notes.map(createNote)}</div>
      <Footer />
    </>
  );
}
export default App;
