export type ArticleProps = {
    headline: string,
    description: string,
    imageSrc?: string,
}

export default function ArticleAll({headline, description, imageSrc}: ArticleProps) {
    return (
        <>
            <h2>{headline}</h2>
            <p>{description}</p>
            {imageSrc && (
                <img
                    src={imageSrc}
                    alt={`Bild für ${headline}`}
                    style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius:'8px' }} // Inline-Styling hier
                />
            )}
        </>
    )
}