import fs from 'fs';
import path from 'path';

export default {
  'generate:before': generator => {
    const asyncapi = generator.originalAsyncAPI;
    let extension;
    try {
      JSON.parse(asyncapi);
      extension = 'json';
    } catch (error) {
      extension = 'yaml';
    }

    fs.writeFileSync(
      path.resolve(
        generator.targetDir, `asyncapi.${extension}`
      )
      , asyncapi, { encoding: 'utf-8' }
    );
  }
};
