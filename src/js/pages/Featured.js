import React from "react";
import Article from "../components/Article";

export default class Featured extends React.Component {
    render() {
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

        const adText = [
            "Ad spot #1",
            "Ad spot #2",
            "Ad spot #3",
            "Ad spot #4",
            "Ad spot #5"
        ];

        const randomAd = adText[Math.round(Math.random() * (adText.length - 1))];
        console.log("featured");

        return (
            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="well text-center">
                        {randomAd}
                        </div>
                    </div>
                </div>
                <div class="row">{Articles}</div>
            </div>
        )
    }
}