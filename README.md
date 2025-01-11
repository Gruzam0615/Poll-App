# 투표 앱 - UI
최종 수정일: 2025.01.12

## Backend 설정
### application.properties
```
spring.application.name=poll-app-back
spring.jpa.hibernate.ddl-auto=none
spring.jpa.show-sql=true

logging.level.org.springframework.web=debug

# MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/pollapp
spring.datasource.username=root
spring.datasource.password=1234
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# H2
# spring.h2.console.enabled=true
# spring.h2.console.path=/h2-console
# spring.datasource.driver-class-name=org.h2.Driver
# spring.datasource.username=sa
# spring.datasource.password=
# spring.sql.init.schema-locations=classpath:h2/schema.sql
# spring.sql.init.data-locations=classpath:h2/data.sql
# spring.sql.init.mode=always
# spring.datasource.url=jdbc:h2:~/test

``` 


## 실행하기(개발모드) gitbash
### Backend 실행
```bash
application.properties 생성
touch ./back/src/main/resources/application.properties
#after
cd back
#after
./gradlew build
#after
./gradlew bootRun

```
### Frontend 실행
```bash
cd .front
#after
npm install
# after
npm run dev
```
[실행] http://localhost:3000

## 기능 목록
[Front-end]
- 투표 생성
- 투표 목록 조회
- 투표 개별 조회
- 투표 하기
- 투표 결과 조회

[back-end]
- 투표 생성
- 투표 목록 조회
- 투표 개별 조회
- 투표 하기