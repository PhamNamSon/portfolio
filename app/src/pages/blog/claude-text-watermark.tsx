import { WritingLayout } from "@/components/writing-layout";

export const ClaudeTextWatermark = () => {
    return (
        <WritingLayout>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">How Claude's Text Watermark Actually Works</h1>
            <p className="text-sm text-foreground/60 mb-8">18 August 2026</p>

            <p>
                Last week, every new Claude model started embedding a hidden watermark in the text it writes. You
                cannot see it. Readers cannot tell the difference. But with the right tool, you can check how likely
                it is that Claude wrote a piece of text.
            </p>

            <p>
                The obvious way to watermark text is to force certain words to show up more often in the output. Read
                enough of it and you can spot the pattern. It also makes the text weird. Anthropic does not do that.
                The method they use does not bias any specific word.
            </p>

            <h2 className="text-2xl font-bold mt-8">How an LLM picks words</h2>

            <p>
                An LLM writes one word at a time. It looks at the sentence so far and builds a list of reasonable next
                words. Give it "the weather today is..." and the options are hot, cold, raining, and so on. Each
                option has a probability. Hot is more likely than raining.
            </p>

            <p>
                Then the model picks one word using a random number, weighted by those probabilities. This randomness
                is what makes the same prompt give different answers. Most of the time, any of the top choices would
                read fine. The exact pick does not matter much to you.
            </p>

            <h2 className="text-2xl font-bold mt-8">The watermark</h2>

            <p>
                Anthropic changes the source of that random number. Instead of true randomness, the pick comes from a
                secret function with a secret key that only they know. The model still follows the same probabilities.
                A word with a low chance still rarely gets picked. So the quality and the style stay the same. Nothing
                is added to the text. No hidden characters, no extra cost, no slower output.
            </p>

            <p>
                Now the trick. Because the function and the key are secret, only Anthropic can check the pattern. When
                they want to check a piece of text, they run it through the function and compare the word choices. The
                more the choices line up, the more likely Claude wrote it. It is not a guarantee. It is a probability.
            </p>

            <h2 className="text-2xl font-bold mt-8">What it cannot do</h2>

            <p>
                The limits are honest ones. Short passages are hard to check, there is not enough text to compare.
                Factual writing has few free choices. After "Isaac Newton's most famous work was called Principia", the
                next word has to be "Mathematica". Nothing to watermark. The same goes for code. Exact output has no
                room for a mark. Only flexible parts, like comments, can carry one. Light edits of human text barely
                register. The more Claude writes, the stronger the signal.
            </p>

            <h2 className="text-2xl font-bold mt-8">Why now</h2>

            <p>
                This did not happen by choice. It happened because of the EU AI Act. In July 2026, Anthropic signed the
                EU Code of Practice on AI content transparency, together with around 190 other organizations. They
                apply the watermark globally because they cannot scope it by region yet. Other major AI providers signed
                the same code and are building their own watermarks.
            </p>

            <p>
                Google is ahead here. Gemini has used the same method, called SynthID Text, for about two years. Google
                DeepMind published it in Nature in 2024. In their testing, they served watermarked output to real Gemini
                users and measured quality. They found no effect. Human raters could not tell the difference either.
            </p>

            <h2 className="text-2xl font-bold mt-8">Nobody is happy</h2>

            <p>
                Here is the funny part. Back then, people complained that AI text was everywhere. You could not tell
                what was written by a real person anymore. Now people complain about the watermark, because the people
                who use AI text can get caught.
            </p>

            <p>
                Pretty much no one is happy either way.
            </p>

            <p>
                I use Claude every day, mostly for code. The part I find most interesting is that code is the hardest
                thing to watermark. The more exact the work, the harder it is to trace. Exactness is still the best
                protection.
            </p>

            <p>
                For years, tools like GPTZero tried to detect AI text by guessing. They looked at word patterns,
                sentence length, and rhythm, then returned a probability. Schools and hiring managers used those guesses
                to accuse people. The guesses were wrong a lot. Students got flagged for essays they wrote themselves.
                People who write English as a second language got flagged the most, because their writing already looks
                different from a native speaker's.
            </p>

            <p>
                The watermark changes that for Claude. It is not a guess. It is a pattern Anthropic deliberately left in
                the text, checked against a secret key. For Claude text, the answer is real.
            </p>

            <p>
                But it only covers Claude. GPTZero and similar tools still have to guess for every other model. And
                guessing always comes with false accusations. The watermark fixes the problem for one company's models,
                and leaves the guessing business alive for everyone else.
            </p>
        </WritingLayout>
    );
};