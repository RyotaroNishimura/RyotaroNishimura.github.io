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

export const サイト名 = `${氏名} — 営業・プランナー｜マーケと AI`;

/** ヘッダーの氏名の横に添える肩書き（2026-10-13 作り替え） */
export const 肩書き = '営業・プランナー';
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
 * 公開時に差し替える箇所 その3/3 は計測ID。
 * GA4 の測定ID は .env（PUBLIC_GA_MEASUREMENT_ID）から読む。Git には入れない。
 * GitHub Actions でビルドするときは、リポジトリの Variables に同名で入れると渡る
 * （.github/workflows/deploy.yml）。未設定でもビルドは通り、計測タグを1バイトも出さない。
 * 計測は GA4 だけ（Cloudflare Web Analytics は入れていない・2026-10-12）。
 */
export const GA測定ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID ?? '';

/** 本番ホスト。ここ以外（localhost・プレビューURL）では GA4 を送らない */
export const 本番ホスト = new URL(_本番URL).hostname;

/**
 * 問い合わせ窓口（2026-10-12 オーナー回答）: X の DM とメールの2つ。主は X の DM。
 * DM 作成画面への直リンクは数値の user ID が要るので使わず、プロフィールへ飛ばして
 * 「メッセージボタンから」と案内する。
 * メールアドレスはオーナーが掲載を明示的に指定した（2026-10-12）。ページ側はこの定数だけを読む。
 */
export const 相談先URL = Xリンク;
export const 相談の案内 = 'X のプロフィールにあるメッセージボタンから DM を送れます';
export const メール = 'ryotaro.nr1997@gmail.com';
export const メールリンク = `mailto:${メール}`;
export const メールの案内 = 'メールでも受け付けます';

/**
 * /go/cta（X のプロフィールへの中継ページ）。2026-10-13 からどのページもボタンを置かず、古いリンクの受け皿としてだけ残す。
 * トップの連絡先は一番下に X とメールを事実として並べるだけ。
 */
export const CTAパス = '/go/cta';

/*
  料金はサイトに載せない（2026-10-12 オーナー回答）。
  2026-10-13 オーナー回答「経歴を書いているだけ」により、案件の受付・金額・返信時間の約束・お引き受けしないことは置かない。
*/

/** 所在地（2026-09-20 オーナー回答）: 非掲載を維持。請求が発生する段階で書面開示する */
export const 所在地の扱い = '請求があり次第、書面で開示します';
/* 連絡先の表示は各ページで ハンドル・メールリンク から組む（メールを mailto で張るため文字列定数にしない） */
