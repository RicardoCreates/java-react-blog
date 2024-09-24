import articles from "../assets/data.ts";
import ArticleAll from "./ArticleAll.tsx";

export default function ArticleCard(){
    return (
        <>
            <>
                {articles.map((article, index) => (
                    <ArticleAll
                        key={index}
                        headline={article.headline}
                        description={article.description}
                        imageSrc={article.imageSrc}
                    />
                ))}
            </>
        </>
    )
}