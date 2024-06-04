import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: Home,
})

function Home() {
  return (
    <div className="h-full flex flex-col w-full">
      <header className="p-4 border-b border-primary/10">
        <nav className="flex gap-2 items-center">
          <div className="bg-primary/10 border text-primary px-2 rounded font-bold">
            YASP
          </div>
        </nav>
      </header>

      <main className="flex-grow flex flex-col mx-auto items-center relative p-4">
        <div className="h-[10svw] lg:h-[25svh] w-[100svw] -m-4 mb-12 bg-gradient-to-b from-primary/10 to-transparent"></div>

        <div className="border p-2 px-4 rounded-full bg-gradient-to-r from-primary/10 to-transparent text-xs">
          Proudly Presenting
        </div>

        <div className="text-3xl lg:text-7xl font-medium tracking-wide my-8 px-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Yet Another Side Project
          </span>

          <div className="relative mt-4 opacity-30">
            <div className="flex h-4">
              <div className="h-0.5 w-full bg-gradient-to-l from-primary/20 to-transparent"></div>
              <div className="h-0.5 w-full bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl text-justify flex flex-col gap-4 border-l p-4 rounded-xl text-muted-foreground text-xs lg:text-lg mt-auto mb-24 relative overflow-hidden">
          <h2 className="font-medium italic text-center">
            Perhaps this project will be different.
          </h2>
          <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary/50 to-accent">
            Maybe this time, I'll conquer that pesky procrastination monster and
            emerge victorious, code gleaming and functionality flawless. Or
            maybe a squirrel will fly by my window and distract me for the next
            three hours. Honestly, at this point, the odds seem about even. But
            hey, a programmer can dream, can't they? Just don't tell my
            ever-expanding collection of unfinished projects. They might get
            jealous.
          </p>
        </div>
      </main>

      <footer className="p-4 border-t border-primary/10 text-xs lg:text-sm text-muted-foreground flex">
        <p className="text-center w-full">
          &copy; {new Date().getFullYear()}
          {" - "}
          <span className="italic">
            I'm sure this one will be finished soon. Really. I mean it this
            time.
          </span>
        </p>
      </footer>
    </div>
  )
}
