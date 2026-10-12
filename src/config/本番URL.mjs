/**
 * 公開URL — 差し替えは「この1行だけ」。
 *
 * astro.config.mjs（sitemap / canonical の基準）と
 * src/config/サイト設定.ts（ページ側）の両方がここを読む。
 * 2箇所に同じ文字列を置くと、公開時に片方だけ直して食い違うので、値はここにしか無い。
 *
 * 公開先は GitHub Pages のユーザーサイト（ルート配信）。サブパスが無いので base は設定しない。
 * 独自ドメインに移すときは、ここをそのドメインに書き換える。
 */
export const 本番URL = 'https://ryotaronishimura.github.io';
