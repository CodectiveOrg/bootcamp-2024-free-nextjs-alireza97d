export function timeAgo(dateString: string): string {
    const createdAt = new Date(dateString);

    const iranTimeOffset = 3.5 * 60 * 60 * 1000;
    const now = new Date(Date.now() + iranTimeOffset);

    const diffInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

    if (diffInSeconds < 300) return "چند لحظه قبل";

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} دقیقه قبل`;

    const diffInHours = Math.floor(diffInMinutes / 60);
    const remainingMinutes = diffInMinutes % 60;

    if (diffInHours < 24) {
        return remainingMinutes === 0
            ? `${diffInHours} ساعت قبل`
            : `${diffInHours} ساعت و ${remainingMinutes} دقیقه قبل`;
    }

    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} روز پیش`;

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} ماه پیش`;

    const diffInYears = Math.floor(diffInDays / 365);
    return `${diffInYears} سال پیش`;
}
