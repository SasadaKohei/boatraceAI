//会場リスト
const venue = ['桐生', '戸田', '江戸川', '平和島', '多摩川', '浜名湖', '蒲郡', '常滑', '津', '三国', '琵琶湖', '住之江', '尼崎',
    '鳴門', '丸亀', '児島', '宮島', '徳山', '下関', '若松', '芦屋', '福岡', '唐津', '大村'];

/**
 * createContentsMenu()
 * role :左コンテンツの会場情報を作成
 *
 * */
function createContentsMenu() {
    let ul = document.getElementById('venueList');
    for (let count = 0; count < venue.length; count++) {
        let li = document.createElement('li');
        let text = document.createTextNode(venue[count]);
        li.appendChild(text);
        ul.appendChild(li);
    }
}

/**
 * createVenueSelectList()
 * role :選択可能会場を表示(開催中の会場を色付き, その他はグレーで表示)
 *
 * */
// function createVenueSelectList() {
//     let div = document.getElementById("venueSelectList");
//
//     for (let count = 0; count < venue.length; count++) {
//         let cvs = document.createElement('button');
//         let text = document.createTextNode(venue[count]);
//         cvs.appendChild(text);
//         cvs.setAttribute('id', 'venue_button_' + count);
//         //後にスクレイピングでフラグを追加
//         if (String(venue[count]) === '鳴門') {
//             cvs.setAttribute('class', 'open_venue');
//             cvs.addEventListener('click', onClickVenueButton);
//         } else {
//             cvs.setAttribute('class', 'rest_venue');
//         }
//         div.appendChild(cvs);
//     }
// }

/**
 * onClickVenueButton()
 * role :開催中の会場をクリックした時の処理
 */
// function onClickVenueButton() {
//     changeRightVenueLayout(this.id);
//     changeRightLayout();
// }

/**
 * changeRightLayout()
 * role :開催中の会場をクリックした時の右レイアウトの背景変更処理
 */
// function changeRightLayout() {
//     let right_layout = document.getElementById('contentsRight');
//     right_layout.className = 'contents_right_after';
// }

/**
 * changeRightLayout()
 * role :開催中の会場をクリックした時の選択可能会場レイアウト変更処理
 * @param clicked_id :押した会場ボタンのid
 */

// function changeRightVenueLayout(clicked_id) {
//     let clicked_venue = document.getElementById(clicked_id);
//     clicked_venue.className = 'clicked_venue';
//
//     let remove_open_venue = document.getElementsByClassName('open_venue');
//     let remove_rest_venue = document.getElementsByClassName('rest_venue');
//     let len_remove_open = remove_open_venue.length;
//     let len_remove_rest = remove_rest_venue.length;
//
//     for (let i = 0; i < len_remove_open; i++){
//         remove_open_venue[i].remove();
//     }
//
//     //謎エラーfor文抜けちゃう
//     for (let i = 0; i < len_remove_rest; i++){
//         remove_rest_venue[i].remove();
//     }
// }