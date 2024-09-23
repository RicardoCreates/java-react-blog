export type ArticleType = {
    headline: string,
    description: string,
    imageSrc?: string,
}


const articles: ArticleType[] = [
    {
        headline: "Mein letzter Trip nach Malta",
        description: "Malta war einfach atemberaubend! Die Strände, die Kultur und die Natur sind wirklich einzigartig.",
        imageSrc: "/gozo.jpeg",
    },
    {
        headline: "Entdecke die Schönheit von Gozo",
        description: "Gozo ist bekannt für seine unglaublichen Landschaften. Von Klippen über Strände bis hin zu den Sonnenuntergängen - hier gibt es so viel zu entdecken.",
    },
    {
        headline: "Entdecke die Schönheit von Malta",
        description: "Malta ist bekannt für seine unglaublichen Landschaften. Von Klippen über Strände bis hin zu den Sonnenuntergängen - hier gibt es so viel zu entdecken.",
    },
];

export default articles