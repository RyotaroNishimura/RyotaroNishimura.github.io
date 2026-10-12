/**
 * robots.txt — サイト設定.ts の「公開済み」1つで切り替える。
 *   false: Disallow: /（公開前。クロールさせない）
 *   true : 全体を許可し、サイトマップの場所を書く
 * 静的ファイル（public/robots.txt）で持つと、公開時に手で書き換える箇所が1つ増えるのでこちらで出す。
 */
import type { APIRoute } from 'astro';
import { 公開済み, 本番URL } from '../config/サイト設定';

export const GET: APIRoute = () => {
  const 本文 = 公開済み
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', 本番URL).href}\n`
    : `# 公開前。サイト設定.ts の「公開済み」を true にするとクロール許可に変わる。\nUser-agent: *\nDisallow: /\n`;
  return new Response(本文, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
