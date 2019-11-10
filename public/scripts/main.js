/**
 *
 *  クリックアクション、ページの作成
 *
 */

//会場リスト(24個)
const venue = ['桐生', '戸田', '江戸川', '平和島', '多摩川', '浜名湖', '蒲郡', '常滑', '津', '三国', '琵琶湖', '住之江', '尼崎',
    '鳴門', '丸亀', '児島', '宮島', '徳山', '下関', '若松', '芦屋', '福岡', '唐津', '大村'];

/**
 * createContentsMenu()
 * role :左コンテンツの会場情報を作成
 *
 * */
function createContentsMenu() {
    let div = document.getElementById('ContentsLeft');
    for (let count = 0; count < venue.length; count++) {
        let p = document.createElement('p');
        let text = document.createTextNode(venue[count]);
        p.appendChild(text);
        p.setAttribute('class', 'venue_info');
        div.appendChild(p);
    }
}

/**
 * createVenueSelectList()
 * role :右コンテンツの選択可能会場を表示(開催中の会場を色付き, その他はグレーで表示)
 *
 * */
function createVenueSelectList() {
    let div = document.getElementById("RightContentsContents");

    for (let count = 0; count < venue.length; count++) {
        let button = document.createElement('button');
        let text = document.createTextNode(venue[count]);
        button.appendChild(text);
        button.setAttribute('id', 'venueButton' + count);
        //後にスクレイピング競技開催中の会場フラグを追加
        if (String(venue[count]) === '鳴門') {
            button.setAttribute('class', 'flex-contents open_venue');
            // cvs.addEventListener('click', onClickVenueButton);
        } else {
            button.setAttribute('class', 'flex-contents rest_venue');
        }
        div.appendChild(button);
    }
}

/**
 * onClickVenueButton()
 * role :開催中の会場をクリックした時の処理
 */
function onClickVenueButton() {
    changeRightLayout();
    changeRightVenueLayout(this.id);
}

/**
 * changeRightLayout()
 * role :開催中の会場をクリックした時の右レイアウトの背景変更処理
 */
function changeRightLayout() {
    let right_layout = document.getElementById('contentsRight');
    right_layout.className = 'contents_right_after';
}

/**
 * changeRightLayout()
 * role :開催中の会場をクリックした時の選択可能会場レイアウト変更処理
 * @param clicked_id :押した会場ボタンのid
 */

function changeRightVenueLayout(clicked_id) {
    let clicked_venue = document.getElementById(clicked_id);
    clicked_venue.className = 'clicked_venue';

    let remove_open_venue = document.getElementsByClassName('open_venue');
    let remove_rest_venue = document.getElementsByClassName('rest_venue');
    let remove_select_venue = document.getElementById("venueSelect");

    let len_remove_open = remove_rest_venue.length;
    let len_remove_rest = remove_open_venue.length;

    // remove_rest_len配列の先頭を消していく
    for (let i = 0; i < len_remove_rest; i++) {
        remove_rest_venue[0].remove();
    }

    for (let i = 0; i < len_remove_open; i++) {
        remove_rest_venue[0].remove();
    }
    remove_select_venue.remove();
    createUndoButton();
}

/**
 * createUndoButton()
 * role :会場選択画面に戻るボタンを作成
 */
function createUndoButton() {
    let div = document.getElementById('contentsRight');

    let cvs = document.createElement('button');
    let text = document.createTextNode('会場選択へ');
    cvs.appendChild(text);
    cvs.setAttribute('id', 'undoButton');
    cvs.setAttribute('class', 'undo_layout_button');

    div.appendChild(cvs);
}















