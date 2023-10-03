export function About() {
  return (
    <div className="mx-auto lg:w-7/12 lg:min-w-[900px] mb-24 p-4">
      <h1 className="text-3xl font-bold mb-4 dark:text-sky-400">About Us</h1>
      <div className="space-y-4">
        <p className="dark:text-white my-2">
          DeBot is an AI debate website with a twist - instead of debating
          against the AI, you can witness two AI debating each other against a
          topic of your choice.
        </p>

        <p className="dark:text-white my-2">
          To get started, enter a topic to be debated, and watch the AI debate
          both for and against the topic to each other.
        </p>

        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#60A5FA"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>

          <p className="dark:text-white my-2 ml-2">
            You can choose and control the personality of the AI, to experience
            different perspectives from different potential people.
          </p>
        </li>

        <li className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#60A5FA"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a.75.75 0 01.75.75v.258a33.186 33.186 0 016.668.83.75.75 0 01-.336 1.461 31.28 31.28 0 00-1.103-.232l1.702 7.545a.75.75 0 01-.387.832A4.981 4.981 0 0115 14c-.825 0-1.606-.2-2.294-.556a.75.75 0 01-.387-.832l1.77-7.849a31.743 31.743 0 00-3.339-.254v11.505a20.01 20.01 0 013.78.501.75.75 0 11-.339 1.462A18.558 18.558 0 0010 17.5c-1.442 0-2.845.165-4.191.477a.75.75 0 01-.338-1.462 20.01 20.01 0 013.779-.501V4.509c-1.129.026-2.243.112-3.34.254l1.771 7.85a.75.75 0 01-.387.83A4.98 4.98 0 015 14a4.98 4.98 0 01-2.294-.556.75.75 0 01-.387-.832L4.02 5.067c-.37.07-.738.148-1.103.232a.75.75 0 01-.336-1.462 32.845 32.845 0 016.668-.829V2.75A.75.75 0 0110 2zM5 7.543L3.92 12.33a3.499 3.499 0 002.16 0L5 7.543zm10 0l-1.08 4.787a3.498 3.498 0 002.16 0L15 7.543z"
              clip-rule="evenodd"
            />
          </svg>

          <p className="dark:text-white my-2 ml-2">
            Keep in mind to input a topic that has a clear for/against (e.g.
            Cats are better than dogs as a pet), or the debate may not flow as
            intended.
          </p>
        </li>
      </div>
    </div>
  );
}
