# pwa-paperoffice

```sh
cd c:\projects
git clone https://github.com/Gelya298/pwa-paperoffice
cd pwa-paperoffice
npm install -g yarn
```

https://create-react-app.dev/docs/making-a-progressive-web-app/

Команда устанавливает шаблон приложения React последней версии с хорошими Сервис-Воркерами для PWA.

```sh
npx create-react-app pwa-paperoffice --template cra-template-pwa 
```

https://blog.pimenov.com.ua/2020/05/08/using-metro4-react-with-cra/

```sh
yarn add customize-cra react-app-rewired --dev
```

brackets config-overrides.js (Бракетс - кстати значит скобки. В теоретической физике < - bra (так эта скобка называется), >- cket (а эта так)

```js
const {
override,
babelInclude
} = require("customize-cra");
const path = require("path");

module.exports = override(
babelInclude([
path.resolve("src"),
path.resolve("node_modules/metro4-react")
])
);
```

https://webdevblog.ru/razbiraemsya-s-nastrojkoj-webpack-dlya-ljubogo-proekta/


## Запуск сервера

```sh
yarn add metro4-react
yarn install
yarn start
```

http://localhost:3000/

## Вносим изменение в приложение на лету

Библиотеки компонентов
https://react.metroui.org.ua/guide/push-button

![App.js](http://homedevice.pro/wp-content/uploads/2021/02/Gelya19.png)

Пример приложения
https://github.com/olton/Metro4-React-App/blob/master/public/index.js

```node
<Grid className="h-100 d-flex flex-align-center flex-justify-center">
<h1>Hello World!</h1>
<p className="text-leader">
Welcome to Metro 4 for React App template!
</p>
<Button>Button</Button>
</Grid>
```
## Лучшие практики React

https://habr.com/ru/post/541320/

## Дополнительные ссылки:

https://ru.reactjs.org/docs/add-react-to-a-website.html
                             
https://github.com/olton/Metro4-React/issues/14

https://blog.pimenov.com.ua/2020/06/07/component-template-in-metro-4/

https://github.com/olton/Metro-UI-CSS/issues/1426

## Критика

https://zen.yandex.ru/media/nuancesprog/konec-epohi-virtualnogo-dom-react-5f058aea6fb88d06d3f0694c
