# Проект

## Описание

Проект использует JSON Server для эмуляции бекенда.
Все запросы к API направляются на локальный JSON Server, работающий на порту 80.

## Инструкция по запуску

### Клонирование репозитория:

git clone https://github.com/ваш-репозиторий.git
cd ваш-репозиторий

### Установка зависимостей:

npm install

### Установка JSON Server:

npm install -g json-server

### Запуск JSON Server:

npx json-server --watch db.json --port 5000

### Запуск приложения:

npm run dev
