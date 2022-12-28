
import './App.css';
import PdfViewerComponent from './component/PdfViewerComponent';

function App() {
  return (
    <div className="App">
      <div className="PDF-viewer">
        <PdfViewerComponent
          document={"document.pdf"}
        />
      </div>
    </div>
  );
}

export default App;
