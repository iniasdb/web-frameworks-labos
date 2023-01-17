export interface Question {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    options: string[],
    userAnswer?: string
}

export interface HighScore {
    name: string;
    score: number;
    date: string;
}
