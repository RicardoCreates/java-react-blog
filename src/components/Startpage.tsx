import {Link} from "react-router-dom";

export default function Startpage() {
    return (
        <>
            <h1>Welcome to my blog</h1>
            <Link to={'/article'}>Article</Link>
        </>
    )
}