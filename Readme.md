# Shelter

## Deploy link

[shelter](https://vadimshidlov.github.io/rs-shelter/shelter/pages/main/)

## Описание проекта

Shelter - это проект, в котором вам предстоит сверстать сайт, состоящий из двух страниц, сделать его адаптивным и интерактивным.

## Ключевые навыки:

- валидная семантическая адаптивная вёрстка
- легкоподдерживаемый читаемый код
- экспорт стилей и графики из Figma
- использование JavaScript для реализации указанного в задании функционала

## Этапы работы над проектом:

Задание состоит из трёх частей:

- [shelter. week-1: Фиксированная вёрстка](shelter-part1.md)
  - в этой части задания необходимо сверстать страницы `main` и `pets` по макету, которые корректно отображаются при ширине окна не менее 1280px.
  - проверяется валидность вёрстки, её совпадение с макетом
- [shelter. week-2: Адаптивная вёрстка](shelter-part2.md)
  - в этой части задания необходимо добавить адаптивность свёрстанным на первом этапе страницам, до ширины 320px включительно, с удовлетворением условий:
    - на любой ширине вся страница с контентом вмещается по ширине в окно браузера, горизонтальная полоса прокрутки не появляется
    - при ширине 768px и 320px страницы соответствуют макету
  - проверяется валидность верстки, ее совпадение с макетом на соответствующей ширине страницы, адаптивность верстки и отсутствие горизонтальной полосы прокрутки
- [shelter. week-3: Добавление функционала](shelter-part3.md)
  - в этой части задания используем JavaScript для добавления странице интерактивности:
    - бургер-меню на обеих страницах
    - попап для карточек животных на обеих страницах
    - бесконечный слайдер-карусель на странице `main`
    - пагинация на странице `pets`
  - проверяется реализованный функционал

Продолжительность выполнения каждой части задания - 1 неделя  
Форма проверки каждой части задания - кросс-чек

[Макет в figma](https://www.figma.com/file/Yk6EnbY63FyG2PJTFkJDMh/shelter)

## Создание собственной копии макета

Выполнение задания начните с создания собственной копии макета. Для этого

- авторизуемся в [figma](https://www.figma.com/)
- открываем макет
- на панели вверху нажимаем на стрелку рядом с названием макета, выбираем пункт "Duplicate to your drafts"
- слева вверху открываем настройки, выбираем "Back to files"
- открываем копию макета рядом с которой есть надпись "In Drafts"

## Рекомендации по качеству кода

Рекомендации предлагаются для ознакомления, их строгое соблюдение на этапе stage#1 не предполагается и не проверяется

- гайдлайн https://codeguide.academy/html-css.html#html
- руководство по качеству кода
  - [общие принципы](../../stage1/modules/clean-code/materials/generic-principles.md)
  - [HTML и CSS рекомендации - начальный уровень](../../stage1/modules/clean-code/materials/html-and-css.md)
  - [HTML и CSS рекомендации - продвинутый уровень](../../stage1/modules/clean-code/materials/html-and-css-extended.md)

## Технические требования

1. вёрстка валидная, семантическая, соответствующая макету
2. приложение корректно отображается и работает в браузере Google Chrome последней версии
3. запрещается использование CSS-фреймворков (`bootstrap`)
4. запрещается использование JS-фреймворков (Angular, React, Vue и т.д.)
5. запрещается использование устаревших библиотек (JQuery и т.д.)
6. запрещается использование TypeScript. На stage#1 вы практикуетесь в использовании чистого JavaScript, изучение TS и его использование предстоит на stage#2 текущего курса.
7. допускается использование CSS-препроцессоров (`Sass`), `normalize.css`
8. не рекомендуется использовать сброс стилей при помощи `reset.css`
9. запрещено добавление вёрстки картинкой, когда делается скрин части макета и вставляется в вёрстку. Для вёрстки используйте теги и символы, картинками можно добавлять изображения и иконки, а не элементы вёрстки (кнопки, блоки, секции)

## Требования к репозиторию

- задание выполняется в приватном репозитории школы. [Как работать с приватным репозиторием школы](https://docs.rs.school/#/private-repository)
- если у вас не создаётся приватный репозиторий школы, задание можно выполнять в личном приватном репозитории
- от ветки `main` создайте ветку `shelter` в ней создайте папку `shelter`, в ней разместите файлы проекта
- для деплоя используйте `gh-pages` [Как сделать деплой задания из приватного репозитория школы](https://docs.rs.school/#/private-repository?id=Как-сделать-деплой-задания-из-приватного-репозитория-школы)
- если не можете для деплоя использовать `gh-pages`, используйте https://app.netlify.com/drop. Название страницы дайте по схеме: имя гитхаб аккаунта - название таска
- так как задача делится на три части, shelter будет иметь три версии:
  1.  ветка `shelter` будет содержать первую часть задания, приступая ко второй части создайте ветку `shelter-part2` от ветки `shelter` что позволит продолжить с того же места, на котором вы остановились в первой части
  2.  по завершении выполнения второй части задания создайте Pull Request из ветки `shelter-part2` в ветку `shelter`, проверьте на конфликты и сделайте Merge
  3.  для третьей части выполнить первые 2 пункта еще раз но с другим названием ветки (`shelter-part3`)
  4.  обратите внимание: Pull Request с последующем мержем выполняется только из ветки текущий разработки в начальную ветку этого таска. Мерж в ветку `main` не производится!
- внутренняя структура проекта - на ваше усмотрение. Самый простой вариант - отдельная верстка страниц, каждая со своими стилями и js, например, как [тут](shelter-folder-structure.jpg). При сабмите работы обратите внимание, чтобы по указанной в сабмите ссылке открывалась именно главная страница задеплоенной работы

## Требования к коммитам

- История коммитов должна отображать процесс разработки приложения.
- [Названия коммитов дайте согласно гайдлайну](https://docs.rs.school/#/git-convention)
