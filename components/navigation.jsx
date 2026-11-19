import { Fragment } from "react";

export default function Navigation({ label, links, currentHref }) {
    return (
        <nav aria-label={label}>
            {links.map(({ href, label: text }, index) => (
                <Fragment key={href}>
                    {index > 0 && " | "}
                    <a href={href} aria-current={href === currentHref ? "page" : undefined}>{text}</a>
                </Fragment>
            ))}
        </nav>
    );
}
