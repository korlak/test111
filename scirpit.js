class Test {
    constructor(a, b, c) {
        this.num1 = a
        this.num2 = b
        this.num3 = c

    }

    display(i) {
        console.log(questions[i].correct)
    }
}

const questions = [
    {
        question: "Формула аміаку",
        answers: ["NH2","NH3","NH4","NH5"],
        correct: 1
    },
    {
        question: "Не кожному електрику може стукнути",
        answers: ["30","50","70","220"],
        correct: 3
    },
    {
        question: "Краща пісня soad",
        answers: ["Tentative","Darts","Dreaming","Всі топ"],
        correct: 3
    },
    {
        question: "що сказав Вінстон Черчиль?",
        answers: ["Underidoderidoderooderiododoo","Underidodaridoderooderiododoo","Underidoderidoderoderiododoo","Underidoderidoderoodariododoo"],
        correct: 3
    },
    {
        question: "Жінка, яка має І групу крові, одружилася з гомозиготним чоловіком, який має IV групу крові. У них народилась одна дитина. Визначте групу крові й генотип дитини.",
        answers: ["A0","B0","AB","AB0"],
        correct: 0
    },
    {
        question: "",
        answers: ["Tentative","Darts","Dreaming","Всі топ"],
        correct: 3
    },
];

for(let i = 0; i < questions.length; i++){
    let affffff = new Test(questions[i])
    affffff.display(i)
}
