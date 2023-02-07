# Фронтенд для приложения Movies Explorer

В данном репозитории реализована клиентская часть приложения на React, а именно представление интерфейса для взаимодействия с api сервиса BeatFilm.
Логика будет подготовлена в следующем этапе дипломной работы.

## Технологии текущего этапа

HTML, CSS, REACT, USE-STATE, USE-EFFECT, USE-CONTEXT, REACT-ROUTER.

## Маршруты

- '/' - страница "О проете". Ничего примечатльного здесь нет, основной фокус сосредоточен на вёрстке макета. Данные о студенте (имя, должность, описание) использолваны исходные, чтобы ревьюер смог проверить работу на соответствие макету. Возможно, в будущем данные студента я заменю на свои. В данный момент в header страницы отображается навигация зарегистрированнго пользователя. Чтобы посмотреть реализацию незарегистрированного пользователя нужно зайти в компонент App, далее найти const [isLoggedIn, setIsLoggedIn] = useState(true), где заменить состаяноие на false.
- '/signin' - страница логина. Ориентируясь на макет, я предположил, что центральный элемент (лого, форма и кнопка) должны находиться всегда по центру вне зависимости от от ориентации.
- '/signup' - страница регистрации. Ориентируясь на макет, я предположил, что центральный элемент (лого, форма и кнопка) должны находиться всегда по центру вне зависимости от от ориентации. Сообщение об ошибке целенаправлено захардкожено в разметку (не использовался существующий компонент, в будущем при реализации логики я буду использовать необходимый компонент).
- '/movies' - страница с фильмами (в будущем будет подгружаться при загрузке приложения). Чек-бокс "короткометражки" можно кликать, чтобы видеть изменение его стиля. При изменении размера экрана должно меняться количество отображаемых карточек. На данном этапе не реализована логика кнопкпи "Ещё", так как нет детальных данных о её работе. Однако, можно нажать на кнопку "Сохранить" карточек, чтобы видеть изменение состаяния кнопок.
- '/saved-movies' - страница с сохранёнными фильмами. Чек-бокс "короткометражки" можно кликать, чтобы видеть изменения стилей. Можно нажать на кнопку "х", чтобы удалить из сохранённых экземпляров выбранный вариант.
- '/profile' - страница профиля. Здесь отображаются данные залогиненного пользоватлея. Если нажать кнопку "Редактировать", состояние приложения изменится, появится кнопка сохранить. Нажав на неё, мы сымитируем ошибку при обновлении прифиля. Чтобы вернуться в первоначальное состояние, нужно нажать Ctrl + R.

## На этом всё

Про страницу с 404 я не стал писать, там всё и так понятно.
Надеюсь, что вам понравится моя работа данного этама диплома. Да, я видел, что в блоке с рендерингом карточек немного не совпадет с макеторм, буквально 4-6 пикселей. Я это сознательно опустил, так как на внешний вид это никак не влияет. Дизайнер будет ругаться? Дайте мне его телефон, и мы решим этот вопрос персонально :).
В остальном я как прилежный студент готов к правкам, заранее благодарю вас за терпение в процессе оценки моего труда.
