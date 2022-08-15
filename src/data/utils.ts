import fs from 'fs-extra';
import { join } from 'path';

type IQueries = {
  [key: string]: string;
};

export const loadeSQLQueries = async (folderName: string) => {
    const filePath: string = join(process.cwd(), 'src/data', folderName);
    const files = await fs.readdir(filePath);
    const sqlFiles: string[] = await files.filter((f: string) => f.endsWith('.sql'));
    const queries: IQueries = {};
    
    for (const sqlFile of sqlFiles) {
        const query: string = await fs.readFileSync(join(filePath, sqlFile), { encoding: 'utf-8' });
        queries[sqlFile.replace(".sql", "")] = query
    }
    return queries;
}
