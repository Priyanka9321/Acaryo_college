/**
 * Google Apps Script — Enquiry Form Handler
 *
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Sheet named "Enquiry Data"
 * 2. Add these headers in Row 1:
 *    Full Name | Gender | Date of Birth | Phone | Email | Education | Course | Message | Timestamp
 * 3. Go to Extensions → Apps Script
 * 4. Paste this entire file, save, then Deploy → New Deployment
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the Web App URL → paste into .env.local as NEXT_PUBLIC_APPS_SCRIPT_URL
 */

const SHEET_NAME = "Enquiry Data";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    sheet.appendRow([
      data.fullName || "",
      data.gender || "",
      data.dob || "",
      data.phone || "",
      data.email || "",
      data.education || "",
      data.course || "",
      data.message || "",
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test via GET to confirm deployment is live
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok", message: "Enquiry script is live." })
  ).setMimeType(ContentService.MimeType.JSON);
}
