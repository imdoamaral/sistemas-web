/*
  Warnings:

  - You are about to alter the column `created_At` on the `estados` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("timestamp(3)")` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_estados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "created_At" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_estados" ("created_At", "id", "nome", "sigla") SELECT "created_At", "id", "nome", "sigla" FROM "estados";
DROP TABLE "estados";
ALTER TABLE "new_estados" RENAME TO "estados";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
