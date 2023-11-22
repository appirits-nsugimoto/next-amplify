# Next.jsアプリケーションをAmplifyでデプロイする

手動デプロイだとSSRをサポートしないので、GitHubなどに置いて自動デプロイする必要があるらしい。ナンデ？

https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html

## 手順

1. [amplify.yml](./amplify.yml) を作る。
2. GitHubにpushする。
3. Amplify consoleでアプリケーションを作る。
   詳細は [Amplify を使った Next.js SSR アプリケーションのデプロイ](https://docs.aws.amazon.com/ja_jp/amplify/latest/userguide/deploy-nextjs-app.html) を参照してください。
4. デフォルトのAmazon Linux 2には古いNodeしかインストールされていないため変更する。
   Amplify consoleの _アプリの設定_ > _ビルドの設定_ > _Build image settings_ でAmazon Linux:2023 を選択する。
