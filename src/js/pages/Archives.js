import React from "react";
import Article from "../components/Article";

export default class Archives extends React.Component {
    render() {
        const query = new URLSearchParams(this.props.location.search)
        const article = this.props.match.params;
        const date = query.get("date");
        const filter = query.get("filter");

        const Articles = [
            "日本映画情報",
            "海外映画情報",
            "現在公開中の映画",
            "近日公開予定の映画",
            "映画の評価一覧",
            "日本アカデミー賞",
            "アカデミー賞",
            "アニメーション賞"
        ].map((title, i) => <Article key={i} title={title} />);

        return (
            <div>
                <h1>Archives</h1>
                article: {article}, date: {date}, filter: {filter}
                <div class="row">{Articles}</div>
            </div>
        )
    }
}