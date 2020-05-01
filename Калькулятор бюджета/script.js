let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let questionFirst = prompt('Введите обязательную статью расходов в этом месяце');
let questionSecond = prompt('Во сколько обойдется?');
let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
        questionFirst: 'ответ на первый вопрос',
        questionSecond: 'ответ на второй вопрос'
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
alert(money/30);