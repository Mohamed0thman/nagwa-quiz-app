# Quiz APP

---

# Quiz server

- cd server
- npm install 

---

## Features

- questions
- rank

---

## Endpoints

- {app_url}/ => home page with welcome message

### Quiz

- {app_url}/api/quiz/questions => listing random ten questions (get)
- {app_url}/api/quiz/result => create rank by student score (post)

#### Requirements

    - endpoints( result) require student score as number by %

## Error Handling

- all point when data is invalid will return errors with status 422 and message

## Available Scripts

- to initialize the app

```shell
    npm init
```

- to build the app

```shell
    npm run build
```

- to start development server

```shell
    npm run dev
```

- to test the app

```shell
    npm run test
```
