import React from "react";

export default class Article extends React.Component {
  render() {
        const { title } = this.props;

        return (
            <div class="col-md-4">
                <h4>{title}</h4>
                <p>映画に関する情報をお届けします。</p>
                <p>例えば、映画の概要、あらすじ、評価、ジャンル、年齢制限、公開日、制作インタビューなどなど。その他、要望などがあれば追加していきます。</p>
                <a class="btn btn-default" href="#">More Info</a>
            </div>
        )
    }
}