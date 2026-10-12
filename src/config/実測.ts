/**
 * ビルド後に実測した値。数字は下の取り方の生出力から取っている（作った数字は1つも無い）。
 *
 * Lighthouse（2026-09-20 計測・今回は測り直していない）:
 *   本文.ts の Lighthouse実測 と、このファイルの Lighthouseコマンド。
 *
 * ビルドから機械的に数えた値（2026-10-12 計測）:
 *   JS合計    : dist 内の .js ファイル 0件 ＋ HTML に埋め込んだ is:inline スクリプトのバイト数
 *               （計測タグ無しのビルドで 953〜1,103 bytes／GA4・Cloudflare の値を入れたビルドで 3,991〜4,141 bytes）
 *   画像合計  : dist/shots/*.webp と dist/ogp.png のバイト数の合計（6ファイル・235,849 bytes）
 *   フォント  : dist 内の .woff/.woff2/.ttf/.otf 0件
 *   ページ数  : dist 内の .html 15件（astro build の "15 page(s) built" と一致）
 */
export const 実測値 = {
  Lighthouse計測日: '2026-09-20',
  ビルド計測日: '2026-10-12',
  Lighthouseコマンド:
    'npx lighthouse http://127.0.0.1:4323/ --form-factor=mobile --screenEmulation.mobile',
  JS合計: '約1KB（配信される .js ファイルは0本。アクセス計測のタグを入れたビルドでは約4KB）',
  画像合計: '約230KB',
  フォント: '0ファイル（システムフォントのみ）',
  ページ数: '15ページ',
};
