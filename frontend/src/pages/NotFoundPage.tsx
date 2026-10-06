import { Link } from "@tanstack/react-router";

export default function NotFoundPage() {
    return (
        <div>
            <h1>404</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link
                className="bg-accent rounded-2xl relative top-10 mx-3 p-3"
                to={"/"}
            >
                Go home
            </Link>
        </div>
    );
}
