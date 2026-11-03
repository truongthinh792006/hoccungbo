import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: './',
    plugins: [
      react(),
      {
        name: 'vite-plugin-local-api-chat',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            const apiKey = process.env.GEMINI_API_KEY || env.GEMINI_API_KEY;
            if (!apiKey) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'API key not configured' }));
              return;
            }

            let bodyStr = '';
            req.on('data', chunk => {
              bodyStr += chunk;
            });

            req.on('end', async () => {
              try {
                const body = JSON.parse(bodyStr);
                const { processSocraticChat } = await server.ssrLoadModule('/api/chat.ts');
                const result = await processSocraticChat(body, apiKey);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(result));
              } catch (err: any) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'Error processing chat' }));
              }
            });
          });
        }
      }
    ],
    server: {
      port: 3000,
      open: false
    }
  };
});
