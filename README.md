# express-typeorm-routing-controllers-sample

Express.js と TypeORM と routing-controllers で API サーバーを立ててみるサンプル

## マイグレーション

参考:

- [Migrations | TypeORM](https://typeorm.io/migrations#running-and-reverting-migrations)
- [TypeORM のスキーママイグレーションを使う | 豆蔵デベロッパーサイト](https://developer.mamezou-tech.com/blogs/2023/02/22/typeorm-migration-intro/)

事前に Postgres のコンテナを立てておく

### マイグレーションファイル作成

```sh
npm run typeorm migration:generate -- -d src/dataSource.ts -p src/migrations/<MigrationName>
```

### マイグレーション実行

```sh
npm run typeorm migration:run -- -d src/dataSource.ts
```

### リバート

```sh
npm run typeorm migration:revert -- -d src/dataSource.ts
```

### スキーマ状態確認

```sh
npm run typeorm migration:show -- -d src/dataSource.ts
```

## ToDo

- jest によるテストコードの作成
- DI の検討? 参考: http://honeplus.blog50.fc2.com/blog-entry-181.html
