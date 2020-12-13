import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
    <header class={style.header}>
        <Link assName={style.active} href="/">
            <h1>Preact App</h1>
        </Link>
        <nav>
            <Link activeClassName={style.active} href="/">
                Home
            </Link>
        </nav>
    </header>
);

export default Header;
