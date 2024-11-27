export function extractYouTubeVideoId(url: string): string {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v')!;
}