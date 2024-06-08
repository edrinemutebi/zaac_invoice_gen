async function downloadPDF(originalPdfBytes, url) {
    if (!originalPdfBytes) {
        alert("Please upload and edit a PDF first.");
        return;
    }

    const pdfDoc = await PDFLib.PDFDocument.load(originalPdfBytes);
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const a = document.createElement('a');
    a.href = url;
    a.download = 'modified.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
