/**
 * Код для определения остатка оплаты для студента буткемпа
 */

// принимаем ли мы платежи
const canPayment = true;

// имя студента
const studentName = 'your name';

// цена
const price = 120000;

// первый взнос
const firstPayment = 50000;

// скидка
const discount = 22;

// формула расчета остатка платежа
const totalPrice = price - (price / 100) * discount;

// остаточный платёж равный формуле расчётка остатка платежа минус первый взнос
const remainingPayment = totalPrice - firstPayment;

if(canPayment) {
  // если остаточный платёж равен нулю
  if (remainingPayment === 0) {
    console.log(`Ты оплатил учебу полностью.`);

    // иначе выводит сообщение к примеру "Али, ты оплатил первый 50000 руб. к оплате осталось ещё 50000руб. Твоя скидка 22%"
  } else {
    const message = `
  ${studentName}, ты оплатил ${firstPayment} руб. 
  К оплате осталось еще ${remainingPayment} руб.
  Твоя скидка: ${discount}%
  `;

    // выводит сообщение выше
    console.log(message);
  }
} else {
  console.log(`Мы сейчас не можем принять платеж`)
}