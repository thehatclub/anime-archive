import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <section className="flex items-center h-screen">
      <div className="container flex flex-col items-center justify-center mx-5">
        <div className="max-w-md text-center relative">
          <h2 className="text-5xl bg-dark">404</h2>
          <p className="text-xl font-semibold md:text-2xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="my-5">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a href="/" className="btn btn-accent-outline">
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  );
}
