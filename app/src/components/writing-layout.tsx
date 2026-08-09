import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { StarBackground } from "@/components/star-background";
import { ThemeToggle } from "@/components/theme-toggle";
import type { ReactNode } from "react";

export const WritingLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            <ThemeToggle />
            <StarBackground />
            <Navbar />

            <main className="pt-24 pb-16 flex-1">
                <div className="container mx-auto max-w-3xl px-4">
                    <article className="space-y-6 text-left">
                        {children}
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
};