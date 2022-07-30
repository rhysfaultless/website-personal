//import GeneratePdfQuote from "/components/price-lead-quote/GeneratePdfQuote";
import { jsPDF, HTMLOptionImage } from "jspdf";

// JSON imports
import DataFile from "/public/json/Data.json";

// logo path for PDF
const ImagePath_Icon = "/public/images/icon.jpg";

function ButtonPpf(props) {
  function GeneratePdf() {
    // PDF setup - create PDF -----------------------------------------------------------
    const doc = new jsPDF();
    
    // PDF setup - font
    doc.setFont("helvetica");

    // PDF setup - add icon image
    var image = new Image();
    image.src = ImagePath_Icon;
    doc.addImage(image, "JPEG", 135, 16, 1479 / 25, 375 / 25);

    // header - watermark
    doc.setFontSize(14);
    doc.setTextColor(200, 0, 0); // make text red
    doc.text(20, 16, "DRAFT");
    doc.setTextColor(0); // make text black


    // header - title
    doc.setFontSize(12);
    doc.text(20, 48, "Title: ");
    doc.text(40, 48, DataFile.labelPdf);

    // horizontal line separating header and columns
    doc.setLineWidth(0.2);
    doc.line(20, 50, 200, 50);

    // horizontal line separating columns and body
    doc.line(20, 54, 200, 54);

    // dark grey rectangle background - component category
    doc.setDrawColor(0);
    doc.setFillColor(69, 69, 69);
    doc.rect(20, 54, 180, 5, "F");

    // light grey rectangle background - quote ID
    doc.setFillColor(206, 206, 206);
    doc.rect(20, 59, 180, 41, "F");
    doc.rect(20, 139, 180, 41, "F");
    doc.rect(20, 219, 180, 41, "F");

    // screenshot image of the configured robot
    var screenshotImageData = props.screenshotData;
    if (screenshotImageData != null) {
      const screenshotProperties = doc.getImageProperties(screenshotImageData);
      const screenshotWidth = 140;
      const screenshotAspect = screenshotProperties.height / screenshotProperties.width;
      doc.addImage(screenshotImageData, "JPEG", 40, 60, screenshotWidth, (screenshotWidth * screenshotAspect));
    }

    // save PDF
    doc.save(quote_name);
  }

  // React DOM
  return (
    <button onClick={GeneratePdf} className="hover:text-yellow-400">
      Download PDF
    </button>
  );
}

export default ButtonPdf;