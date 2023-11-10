import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "s-maxage=10");
  const now = new Date();
  return res.status(200).json({
    msg: "キャッシュのテストです。",
    now: `${now.toISOString()}`,
  });
}
