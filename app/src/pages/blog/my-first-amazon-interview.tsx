import { WritingLayout } from "@/components/writing-layout";

export const MyFirstAmazonInterview = () => {
    return (
        <WritingLayout>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">How One Interview Question Broke My Ego and Fixed My Interview Style</h1>
            <p className="text-sm text-foreground/60 mb-8">08 August 2026</p>

            <p>
                My first interview was with Amazon. It was one of the first interviews I ever had, and I walked in
                confident. The first question was math, and math was my strong point. I had the highest math score in
                my high school.
            </p>

            <p>
                The interviewer asked: "What is the next number in this sequence? 3, 15, 17, -1"
            </p>

            <p>
                I stared at the numbers. Nothing came. I had no interview experience, so I had a plan: solve it in my
                head first, then give a clean answer. The plan sounded good. It was a trap.
            </p>

            <p>
                I sat in silence. One minute. Five minutes. The interviewer watched me think. I said nothing.
            </p>

            <p>
                After a while, he said: "You should speak out loud about what you think."
            </p>

            <p>
                I heard the words, but I did not understand them. Talking felt like showing a half finished answer. So
                I kept solving in my head, and I kept failing. For most of that hour, I stayed stuck on the first
                question. I barely remember the rest of the interview. I remember the silence.
            </p>

            <p>
                After it ended, I looked up the question. The answer had nothing to do with arithmetic. It was about
                letters. Count the letters in each number: three has 5, fifteen has 7, seventeen has 9, negative one
                has 11. The pattern was right there.
            </p>

            <p>
                Then I laughed. The advice the interviewer gave me was the hint. If I had said the numbers out loud, I
                would have heard the pattern myself. He was trying to hand me the answer, and I was too busy being
                quiet to take it.
            </p>

            <p>
                I still do not know if he meant it as a hint for that question, or as a tip for my next interviews.
                Maybe both. It makes me laugh every time I think about it.
            </p>

            <h2 className="text-2xl font-bold mt-8">What I learned</h2>

            <ul className="list-disc pl-6 space-y-3">
                <li>
                    An interview is a conversation, not an exam. The interviewer wants to hear how you think. A wrong
                    answer with clear reasoning beats a silent one.
                </li>
                <li>
                    Silence is the worst answer. If you do not know, say so. Then say what you do know. Talk about what
                    you tried, what you ruled out, what you would check next.
                </li>
                <li>
                    Hard questions are often simple questions in disguise. Interview puzzles are rarely about raw math.
                    They are about communication and calm.
                </li>
                <li>
                    Practice out loud. Do mock interviews. Explain your steps and your dead ends until talking while
                    thinking feels normal.
                </li>
            </ul>

            <p>
                That interview did not go well. It is still the one I learned the most from. I cannot look at the
                sequence 3, 15, 17, -1 without smiling.
            </p>

            <p>
                If you have an interview coming up, here is my advice: speak out loud. Your first answer does not have
                to be right. It just has to be heard.
            </p>
        </WritingLayout>
    );
};