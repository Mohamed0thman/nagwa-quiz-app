# Quiz APP

---

# Quiz server

```shell
    cd server
    npm install
    npm run dev
```

## Features

- questions
- rank

---

## Endpoints

### Quiz

- {app_url}/api/quiz/questions => listing random ten questions (get)
- {app_url}/api/quiz/result => create rank by student score (post)

#### Requirements

    - result endpoint require student's score as number by %

## Error Handling

-  when data is invalid will return errors with status 422 and message

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

# Quiz client

```shell
    cd client
    npm install
    npm run dev
```

## Features

- questions screen
- rank screen
