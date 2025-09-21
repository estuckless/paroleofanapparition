export default function Pt2() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto font-mono text-sm space-y-4 text-black">
        <h1 className="text-lg">pt 2</h1>
        <div className="space-y-4">
          <div className="space-y-2">
            <p><strong>what:</strong> Performance, Concert</p>
            <p><strong>where:</strong> Venster99, Vienna</p>
            <p><strong>when:</strong> Thursday, 09.10.2025, 20:00-23:00</p>
          </div>
          
          <div className="space-y-2">
            <p><strong>artists:</strong></p>
            <div className="ml-4 space-y-1">
              <p>GNEVER</p>
              <p>Imants Daksis & Mersedes Margoit</p>
            </div>
          </div>

          <div className="space-y-2">
            <p><strong>access:</strong></p>
            <div className="ml-4 space-y-1">
              <p><a href="https://maps.app.goo.gl/g8FJAssmyfkr3JsQ9" target="_blank" rel="noopener noreferrer" className="hover:underline">Venster99<br />Gürtelbogen 99, 1090 Wien</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}