import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { 本番URL } from './src/config/本番URL.mjs';

/**
 * 自社で運用している情報サイト（Astro 5 静的出力）の構成を踏襲する。
 * 違いは3つ:
 *   - MDX を入れない（記事コレクションが無いので依存を増やさない）
 *   - lastmod の記事マップが要らない（ページ数が固定）
 *   - site（GitHub Pages のユーザーサイト・ルート配信なので base は不要）は src/config/本番URL.mjs の1行だけで決まる
 */
export default defineConfig({
  site: 本番URL,
  integrations: [
    sitemap({
      /*
        noindex のページを sitemap に載せない。
        /go/cta は <meta name="robots" content="noindex"> を出しているので、
        sitemap に載せたままだと「登録してほしいのに登録するなと書いてある」矛盾した合図になる。
        Search Console で「除外: noindex タグによって除外されました」が積み上がるだけなので外す。
      */
      filter: (page) => !/\/go\/cta\/$/.test(new URL(page).pathname),
    }),
  ],
  build: {
    // GitHub Pages 向けに静的出力（/works/ → /works/index.html）
    format: 'directory',
  },
  // 画像最適化はビルド時のみ。ランタイムJSを増やさない
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
  vite: {
    build: {
      // Astro 7（Vite 8 / Lightning CSS）は既定でメディアクエリを範囲構文（width>=42rem）に書き換える。
      // iOS 16.3 以前の Safari は範囲構文を解釈できず段組みが効かなくなるため、従来の min-width 表記を保つ。
      cssTarget: ['safari14', 'chrome100', 'firefox100', 'edge100'],
    },
  },
});
