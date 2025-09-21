export default function Contact() {
  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-2xl mx-auto font-mono text-sm space-y-6 text-black">
        <h1 className="text-lg">contact</h1>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="font-semibold">gottrekorder – association of artists</h2>
            <div className="space-y-2">
              <p>E-Mail: office@gottrekorder.com</p>
              <p>Tel: +43 650 736 07 82</p>
              <p>Web: <a href="https://gottrekorder.com" target="_blank" rel="noopener noreferrer" className="hover:underline">gottrekorder.com</a></p>
              <p>Instagram: <a href="https://www.instagram.com/gottrekorder" target="_blank" rel="noopener noreferrer" className="hover:underline">@gottrekorder</a></p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold">HM Communication</h2>
            <div className="space-y-2">
              <p><strong>Hema Makwana</strong></p>
              <p>E-Mail: office@hmcommunication.eu</p>
              <p>Tel: +676 644 15 66</p>
              <p>Web: <a href="https://hmcommunication.eu" target="_blank" rel="noopener noreferrer" className="hover:underline">hmcommunication.eu</a></p>
              <p>Instagram: <a href="https://www.instagram.com/_hm_communication" target="_blank" rel="noopener noreferrer" className="hover:underline">@_hm_communication</a></p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-semibold">Media Inquiries</h2>
            <p>For further information or media inquiries, please contact us via:</p>
            <div className="ml-4 space-y-1">
              <p>Email: office@gottrekorder.com</p>
              <p>Instagram: <a href="https://www.instagram.com/gottrekorder" target="_blank" rel="noopener noreferrer" className="hover:underline">@gottrekorder</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}