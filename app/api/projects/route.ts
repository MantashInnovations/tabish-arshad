import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const filePath = path.join(process.cwd(), 'data', 'portfolio.json');

        // Read existing data
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const portfolio = JSON.parse(fileContent);

        // Update sections if provided
        if (data.projects) portfolio.projects = data.projects;
        if (data.personalInfo) portfolio.personalInfo = data.personalInfo;
        if (data.achievements) portfolio.achievements = data.achievements;

        // Save back to file
        fs.writeFileSync(filePath, JSON.stringify(portfolio, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to save portfolio data:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
