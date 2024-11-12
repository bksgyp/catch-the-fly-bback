# 📝 **API 명세서**

---

**Base URL:**  
`https://port-0-catch-the-fly-bback-m3ecvopi1376b5ab.sel4.cloudtype.app/`

---

## 1. 유저의 기록 저장 API

### **Endpoint:** `/record`
### **Method:** `POST`
### **Description:** 유저가 선택한 난이도에서 파리 잡는데 걸린 시간을 기록하여 저장합니다.

#### Request

- **URL:** `https://port-0-catch-the-fly-bback-m3ecvopi1376b5ab.sel4.cloudtype.app/record`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body Parameters:** JSON 형식
  - `name` (string, required): 유저의 이름
  - `difficulty` (string, required): 난이도 (예: "easy", "medium", "hard")
  - `time` (number, required): 파리 잡기 완료 시간 (단위: 초)

#### Sample Request Body
```json
{
  "name": "JohnDoe",
  "difficulty": "medium",
  "time": 32.5
}
```

#### Response
- **Status Code:** `201 Created` - 기록이 성공적으로 저장된 경우
- **Response Body:** JSON 형식
  - `message` (string): 저장 성공 메시지
  - `data` (object): 저장된 기록 정보
    - `name` (string): 유저 이름
    - `difficulty` (string): 난이도
    - `time` (number): 기록된 시간

#### Sample Response
```json
{
  "message": "Record saved successfully.",
  "data": {
    "name": "JohnDoe",
    "difficulty": "medium",
    "time": 32.5
  }
}
```

#### Errors
- **Status Code:** `400 Bad Request` - 잘못된 요청 (예: 필수 파라미터 누락)
- **Status Code:** `500 Internal Server Error` - 서버 에러

---

## 2. 난이도별 랭킹 조회 API

### **Endpoint:** `/rankings/:difficulty`
### **Method:** `GET`
### **Description:** 지정된 난이도에 따른 상위 5명의 유저 기록(시간 순)을 반환합니다.

#### Request

- **URL:** `https://port-0-catch-the-fly-bback-m3ecvopi1376b5ab.sel4.cloudtype.app/rankings/{difficulty}`
  - `{difficulty}`는 `easy`, `medium`, `hard` 중 하나의 값을 가집니다.
- **Method:** `GET`
- **Headers:** 없음
- **Path Parameters:** 
  - `difficulty` (string, required): 조회할 난이도 (예: "easy", "medium", "hard")

#### Response
- **Status Code:** `200 OK` - 랭킹 조회 성공
- **Response Body:** JSON 형식
  - `difficulty` (string): 난이도
  - `rankings` (array): 상위 5명의 유저 기록 리스트
    - 각 항목은 객체로 `name`(유저 이름)과 `time`(기록된 시간)을 포함합니다.

#### Sample Response
```json
{
  "difficulty": "medium",
  "rankings": [
    { "name": "Alice", "time": 28.7 },
    { "name": "Bob", "time": 30.2 },
    { "name": "Charlie", "time": 31.5 },
    { "name": "David", "time": 32.1 },
    { "name": "Eve", "time": 32.5 }
  ]
}
```

#### Errors
- **Status Code:** `400 Bad Request` - 잘못된 요청 (예: 잘못된 난이도)
- **Status Code:** `404 Not Found` - 해당 난이도에 기록이 없는 경우
- **Status Code:** `500 Internal Server Error` - 서버 에러

---

### 참고 사항

- MVP 단계에서 서버 메모리를 사용하므로, 서버가 재시작될 경우 랭킹 기록이 초기화될 수 있습니다.
- 추후 데이터베이스 도입 시 데이터 영구 보관 및 확장 기능을 고려할 수 있습니다.

