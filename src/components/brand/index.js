import { Link } from "preact-router/match";
import style from "./style.scss";

export default function Brand() {
    return (
        <div class={style.brand}>
            <h1 class={style.name}>
                <Link href="/">Galen Guyer</Link>
            </h1>
            <span class={style.description}>Full-Stack Software Engineer</span>
        </div>
    );
}
