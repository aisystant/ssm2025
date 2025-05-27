<template>
    <div class="modal fade" id="feedback" tabindex="-1">
        <div class="modal-dialog feedback-modal">
            <div class="modal-content">
                <div class="modal-body">
                    <h5 class="modal-title">
                        Если у вас остались вопросы, то оставьте свои координаты в Telegram, и мы перезвоним вам
                    </h5>
                    <div class="feedback__form">
                        <form method="post">
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Имя">
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Аккаунт Telegram">
                            </div>
                            <div class="form-submit">
                                <button type="submit" class="btn">Отправить</button>
                            </div>
                        </form>
                        <div class="form-agreement">
                            Нажимая на кнопку, вы соглашаетесь с нашей <a href="/policy" target="_blank">политикой конфиденциальности</a>
                            и даёте согласие на обработку <a href="/agreement" target="_blank">персональных данных</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
