function userCard(number) {

    const information = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number,
    };

    const cardOperation = {

        getCardOptions: () => {
            return information;
        },

        putCredits: (money) => {
            information.balance = information.balance + money;

        },

        takeCredits: (money) => {
            if (information.transactionLimit > money && information.balance > money) {
                information.balance = information.balance - money;

            } else {
                console.error('Немає грошей на балансі');
            }

        },

        setTransactionLimit: (number) => {
            information.transactionLimit = number;


        },

        transferCredits: (numberCredits, creditCard) => {
            if (information.transactionLimit > numberCredits && information.balance > numberCredits) {
                const taxes = (numberCredits * 0.5) / 100;
                numberCredits = numberCredits + taxes;
                information.balance = information.balance - numberCredits;

                creditCard.putCredits(numberCredits-taxes);

            } else {
                console.error('Немає грошей на балансі');
            }

        },
    }

    return cardOperation;

}

const card3 = userCard(3);
const card1 = userCard(1);

console.log(card3.getCardOptions());
card3.putCredits(150);
card3.takeCredits(10);
card3.setTransactionLimit(5000);
card3.transferCredits(100, card1);

console.log(card1.getCardOptions());


// Створити UserAccount.

// class UserAccount {
//     name;
//     cards;
//
//     constructor(name) {
//         this.name = name;
//         this.cards = [];
//     }
//
//     addCard = () => {
//
//     }
// }
//
// const user = new UserAccount('Bobs');