import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
           <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container mx-auto flex flex-col items-center justify-center px-5">
		<div className="max-w-md text-center">
			<h2 className="mb-6 font-extrabold text-orange-500 text-9xl dark:text-gray-400">
				<img src="https://i.ibb.co/dBvkyhn/TLC-Profile-404-Error-Artboard-1.png" alt="" />
				<span className="sr-only">Error</span>Oops!!
			</h2>
			<p className="text-2xl font-semibold md:text-3xl text-black">Sorry, Page not found</p>
			<p className="mt-2 mb-4 dark:text-gray-700">But dont worry</p>
			<Link to="/" rel="noopener noreferrer" href="#" className="btn btn-secondary px-8 py-2 font-bold rounded-full dark:bg-violet-600 text-black dark:text-gray-100">Back to home</Link>
		</div>
	</div>
</section>
        </div>
    );
};

export default ErrorPage;