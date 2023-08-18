# CheerChain

バッジ：（ここにバッジの内容を記入）

ロゴやバナー画像

## 目次

1. [概要](#概要)
2. [デモ](#デモ)
3. [目的](#目的)
4. [開発環境](#開発環境)
5. [システム構成図](#システム構成図)
6. [使い方](#使い方)
7. [こだわったポイント](#こだわったポイント)
8. [ライセンス情報](#ライセンス情報)
9. [今後の計画](#今後の計画)

## 概要

CheerChain は、ブロックチェーン技術を活用した新しい形の意思決定プラットフォームです。個人や企業の提案・調査・データ収集に対して、ユーザーはアンケートや投票を通して意見を投じることができます。また、ユーザーは回答することで報酬のトークンを受け取ることができ、コミュニティ内での投票活動を奨励する仕組みも取り入れられます。貢献度により、NFT を付与することも考えられます。これにより、多くの消費者にアプローチし、意思決定プロセスを分散化させることを目指します。

## デモ

サービスのスクリーンショット画像 or GIF アニメ（デモ内容を記入）

## 目的

CheerChain の目的は、意思決定プロセスを透明性と分散化に基づいて行うことです。ブロックチェーンの技術を利用して、アンケート結果の改ざんを不可能にし、ユーザーの意見を尊重しつつ、報酬トークンを通じてユーザーを奨励します。

## 開発環境

### フロントエンド

### バックエンド

## システム構成図

## 使い方

### 開発者向け

クローンした際、`node_modules/react-scripts/config/webpack.config.js`を編集する必要があります。<br />

```
resolve: {
  fallback: {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    zlib: require.resolve("browserify-zlib"),
    url: require.resolve("url/"),
  },
},
```

を追加してください。

## こだわったポイント

- ユーザーフレンドリーな UI/UX を提供し、使いやすさを重視
- ブロックチェーン技術を使用して、アンケートと投票の透明性とセキュリティを確保
- 提案の新規性や創造的な解決策を評価し、意見を投じる対象となる提案を選定
- プラットフォーム内で提案者と投票者が対話し、コミュニケーション機能を提供

また、アンケート・ポイント・クラウドファンディング等の競合サイトとの差別化ポイントとして、以下の特徴があります：

- 個人もアンケートを実施可能であり、仮想通貨を通じた報酬分配が容易
- アンケートへの回答だけでなく、コミュニティで双方向的な対話ができるため、相手を応援している実感が湧く
- ブロックチェーンによるアンケート結果の記録により、透明性と非改竄性が証明

## ライセンス情報

## 今後の計画

### 予定している機能
