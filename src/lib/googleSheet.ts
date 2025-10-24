// Function to append data to Google Sheets
import { google } from 'googleapis';
import path from 'path';
export async function appendToGoogleSheet(data: any[]) {
    const auth = new google.auth.GoogleAuth({
        keyFile: path.join(process.cwd(), 'service-account.json'), // 👈 absolute path
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID!,
        range: 'submission!A1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
            values: [data],
        },
    });
}