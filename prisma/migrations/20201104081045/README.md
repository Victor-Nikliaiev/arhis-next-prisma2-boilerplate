# Migration `20201104081045`

This migration has been generated by Victor Nikliaiev at 11/4/2020, 10:10:45 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"email" text   NOT NULL ,
"name" text   ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Post" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"title" text   NOT NULL ,
"body" text   NOT NULL ,
"userId" integer   ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

ALTER TABLE "public"."Post" ADD FOREIGN KEY("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201104081045
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,27 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id    Int     @id @default(autoincrement())
+  email String  @unique
+  name  String?
+  posts Post[]
+}
+
+model Post {
+  id        Int      @id @default(autoincrement())
+  createdAt DateTime @default(now())
+  title     String
+  body      String
+  user      User?    @relation(fields: [userId], references: [id])
+  userId    Int?
+}
```


