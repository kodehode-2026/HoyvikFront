import { BookingPage } from "@/pages/BookingPage.tsx";
import NotFoundPage from "@/pages/NotFoundPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_index/booking")({
    component: NotFoundPage
});
