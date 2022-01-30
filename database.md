- [데이터 베이스 생성](#데이터-베이스-생성)
- [테이블](#테이블)
  - [테이블 리스트](#테이블-리스트)
  - [테이블 쿼리](#테이블-쿼리)
- [modify column](#modify-column)
  - [users Table](#users-table)
- [insert data](#insert-data)

# 데이터 베이스 생성

```sql
CREATE DATABASE recordBenefits default CHARACTER SET utf8;
```

# 테이블

## 테이블 리스트

    - users

```sql
  SHOW TABLES;
```

## 테이블 쿼리

```sql

DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    nickname VARCHAR(100) NOT NULL,
    birthday VARCHAR(100),
    gender VARCHAR(10),
    profileImageUrl VARCHAR(255) NOT NULL,
    thumbnailImageUrl VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

```

# modify column

## users Table

```sql
ALTER TABLE user RENAME TO users;
ALTER TABLE users RENAME COLUMN use_id TO user_id;
* primary key 추가 방법1 - primary key 있는 상태
  ALTER TABLE users DROP PRIMARY KEY, ADD PRIMARY KEY(user_id, email);
* primary key 추가 방법2 - primary key 정하지 않았을 때
  ALTER TABLE users ADD PRIMARY KEY (email);

ALTER TABLE users ADD couple_id INT AFTER email;
```

# init sample data insert data

```sql
  INSERT INTO users_test (token, email, nickname) VALUES ('토큰1', 'okwoyjy@gmail.com', '재윤');
  INSERT INTO users_test (token, email, nickname) VALUES ('토큰2', 'okwoyjy@gmail.com', '현아');
```
