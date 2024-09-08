import * as fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import * as path from 'path';
import * as xlsx from 'xlsx';

const loadExcelData = () => {
    const filePath = path.join(process.cwd(), 'public/Table', 'Table.xlsx');
    const file = fs.readFileSync(filePath);
    const workbook = xlsx.read(file, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
    return jsonData;
  };

  const GET = (req: NextRequest) => {
    const data = loadExcelData();

    return NextResponse.json(data);
  }

  export {GET}