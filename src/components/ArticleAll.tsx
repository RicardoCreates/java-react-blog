export type ArticleProps = {
    headline: string,
    description: string,
}

export default function ArticleAll({headline, description}:ArticleProps){
    return (
        <>
        <h2>{headline}</h2>
            <p>{description}</p>
        </>
    )
}