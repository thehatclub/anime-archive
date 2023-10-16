import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <section className="flex items-center h-full p-16">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-bold text-5xl">404</h2>
          <p className="text-2xl">Sorry, we couldn't find this page.</p>
          <p className="mt-4 mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a href="/" className="btn btn-accent">
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
}
