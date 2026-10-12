/**
 * サイト設定 — 差し替えが起きる値は全部ここに集約する。
 *
 * 指示書 §1「サービス名・氏名・URL は 1語置換で全箇所が変わる」の実体。
 * ページ側は必ずこのファイルから読む。ページに数字や氏名を直接書かない。
 */

/** 名義（2026-09-20 オーナー回答で確定）: 実名＋顔出し。実名とハンドルを相互明記する */
export const 氏名 = '西村 涼太郎';
export const ハンドル = '@ryotaro_nishi';
export const Xリンク = 'https://x.com/ryotaro_nishi';

export const サイト名 = `${氏名} — Web制作`;
export const サイト略称 = '西村涼太郎';

/**
 * 公開時に差し替える箇所 その1/3。
 * 値の実体は src/config/本番URL.mjs の1行だけ。astro.config.mjs（sitemap・canonical）と
 * このファイル（ページ側）が同じ物を読むので、公開時に直すのは向こうの1行で済む。
 */
export { 本番URL } from './本番URL.mjs';
import { 本番URL as _本番URL } from './本番URL.mjs';

/**
 * 公開時に差し替える箇所 その2/3。
 * robots.txt は src/pages/robots.txt.ts がこの値を読んで書き出す。
 * false の間は Disallow: /（クロールさせない）、true でクロール許可＋サイトマップの場所を出す。
 */
export const 公開済み = true;

/**
 * 公開時に差し替える箇所 その3/3 は計測トークン。
 * GA4 測定ID と Cloudflare Web Analytics のトークンは .env（PUBLIC_GA_MEASUREMENT_ID /
 * PUBLIC_CF_BEACON_TOKEN）から読む。Git には入れない。
 * GitHub Actions でビルドするときは、リポジトリの Variables に同名で入れると渡る
 * （.github/workflows/deploy.yml）。未設定でもビルドは通り、計測タグを1バイトも出さない。
 */
export const GA測定ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? '';
export const CFビーコン = import.meta.env.PUBLIC_CF_BEACON_TOKEN ?? '';

/** 本番ホスト。ここ以外（localhost・プレビューURL）では GA4 を送らない */
export const 本番ホスト = new URL(_本番URL).hostname;

/**
 * 問い合わせ窓口（2026-10-12 オーナー回答）: 当面は X の DM。
 * DM 作成画面への直リンクは数値の user ID が要るので使わず、プロフィールへ飛ばして
 * 「メッセージボタンから」と案内する。
 */
export const 相談先URL = Xリンク;
export const 相談の案内 = 'X のプロフィールにあるメッセージボタンから DM を送れます';

/** 主CTA。動詞で終わる。飛び先は全ページ共通で /go/cta（そこから X のプロフィールへ） */
export const CTA文言 = 'X の DM で相談する';
export const CTAパス = '/go/cta';

/*
  料金はサイトに載せない（2026-10-12 オーナー回答）。
  金額はご相談の内容をうかがったうえで、書面のお見積りで出す。
*/
export const 料金の扱い = '金額は、ご相談の内容をうかがったうえで、書面のお見積りでお出しします。';

/** お引き受けする範囲（含むもの／含まないもの）。「お問い合わせください」逃げをしないための列挙 */
export const 含む = [
  '要件定義（最初に聞く10の質問からの整理）',
  'ページ構成とワイヤー',
  '本文コピーの執筆',
  '実装（静的サイト・スマホ優先）',
  '公開作業（Cloudflare Pages）',
  'アクセス計測の設置（GA4）',
  '公開から30日後の数値レポート 1回',
];
export const 含まない = [
  'ドメイン・サーバーの費用（実費をそのままお支払いいただきます）',
  '写真撮影・動画制作',
  'ロゴやブランドの新規デザイン',
  '公開後の継続運用（月次で別途お見積り）',
  '広告の出稿と運用',
];

/** 返信の約束。サイトに書く以上は守れる数字だけ書く */
export const 返信時間 = '24時間以内';
export const 診断納期 = '3日以内';

/** 所在地（2026-09-20 オーナー回答）: 非掲載を維持。請求が発生する段階で書面開示する */
export const 所在地の扱い = '請求があり次第、書面で開示します';
export const 連絡先 = `X（${ハンドル}）の DM からご連絡ください`;

/** 1語置換の確認用。grep でここと各ページの参照がヒットする */
export const 公開日の約束 = '公開日、守ります。';
