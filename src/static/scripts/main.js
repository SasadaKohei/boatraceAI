/**
 *
 *  クリックアクション、ページの作成
 *
 */

//会場リスト(24個)
const venue = ['桐生', '戸田', '江戸川', '平和島', '多摩川', '浜名湖', '蒲郡', '常滑', '津', '三国', '琵琶湖', '住之江', '尼崎',
    '鳴門', '丸亀', '児島', '宮島', '徳山', '下関', '若松', '芦屋', '福岡', '唐津', '大村'];

const venue_num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

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
function createVenueSelectList(scraping_venue) {
    let div = document.getElementById("RightContentsContents");

    for (let count = 0; count < venue.length; count++) {
        let button = document.createElement('button');
        let text = document.createTextNode(venue[count]);
        button.appendChild(text);
        button.setAttribute('id', 'venueButton' + count);
        button.setAttribute('class', 'flex-contents rest_venue');
        //後にスクレイピング競技開催中の会場フラグを追加
        console.log(scraping_venue);
        for (let num = 0; num < scraping_venue.length; num++){
            console.log("venue_num :", venue_num[count],", scraping :",scraping_venue[num]);
            if (String(venue_num[count]) === String(scraping_venue[num])) {
                button.setAttribute('class', 'flex-contents open_venue');
                button.addEventListener('click', onClickVenueButton);
            } 
        }
        div.appendChild(button);
    }
}

/**
 * onClickVenueButton()
 * role :開催中の会場をクリックした時の処理
 */
function onClickVenueButton() {
    changeRightLayout(this.id);
}

/**
 * changeRightLayout();
 * @param :cliced_id 押したボタンのid
 */
function changeRightLayout(clicked_id){
    for (let count = 0; count < venue.length; count++) {
        let div = document.getElementById('venueButton' + count);
        if (div.className === 'flex-contents clicked_venue'){
            div.className = 'flex-contents open_venue'
        }
    }
    let clicked_venue = document.getElementById(clicked_id);
    clicked_venue.className = 'flex-contents clicked_venue';
}