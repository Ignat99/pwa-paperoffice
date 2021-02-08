# pwa-paperoffice

cd c:\projects
git clone https://github.com/Gelya298/pwa-paperoffice
cd pwa-paperoffice
npm install -g yarn

https://create-react-app.dev/docs/making-a-progressive-web-app/

npx create-react-app pwa-paperoffice --template cra-template-pwa (Оно устанавливает шаблон приложения React последней версии с хорошими Сервис-Воркерами для PWA)

blog.pimenov.com.ua/2020/05/08/using-metro4-react-with-cra/

yarn add customize-cra react-app-rewired --dev

brackets config-overrides.js (Бракетс - кстати значит скобки. В теоретической физике < - bra (так эта скобка называется), >- cket (а эта так)
```sh
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

