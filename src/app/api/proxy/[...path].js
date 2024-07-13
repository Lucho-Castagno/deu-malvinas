import { createProxyMiddleware } from 'http-proxy-middleware';
import NextCors from 'nextjs-cors';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  target: 'https://www.bienestar.mil.ar/malvinas/geojson',
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '',
  },
});

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  proxy(req, res, (result) => {
    if (result instanceof Error) {
      res.status(500).json({ error: 'Proxy error' });
    } else {
      res.status(200).end();
    }
  });
}