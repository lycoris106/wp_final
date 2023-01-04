# What's in your fridge?
## Motivate
目前網路上大部分的食譜網站，都是藉由區域、主食、或是飲食文化進行分類，就算有利用食材進行分類也都是比較特定的類別。因此，我們決定反向思考，冰箱中常常會有些剩餘的食材，我們希望使用者可以利用網站找到冰箱中食材能達成的料理，進而減少食物的浪費，同時也提供了食譜分享的平台供使用者分享自己的獨門料理。

## Service
不同於網路上大部分的食譜網站，使用者可以透過我們所提供的服務以食材進行搜索，除了預設提供食材的之外已可以手動輸入，網站則是提供可能可以做出的料理食譜的功能，並且以食材配對成功的數量進行排序並且標示於網站上，食譜來源是[Asian Food Network](https://asianfoodnetwork.com/)。最後，亦提供註冊以及登入網站，以分享個人客製化的食譜至網站上。

## Design
### frontend

### backend
基本上以`graphql`作為前後端的溝通橋梁，參考`hack3`完成的`Budgetly Light`為基底進行調整。後端整合下方`scraper`彙整的資料後分別定義`mongodb`以及`graphql`的`schema`，雖然兩者不完全相同，但是透過後端的處理使的前端以及資料庫可以順利溝通，尤其是在最後加入使用者的登入功能之後，後端妥善處理了不同使用者間接收資訊不同的功能。

### scraper
原本是計畫透過網路上搜尋到的訓練集作為初始資料進行篩選，然而大部分的資料集所蒐集的資訊都沒辦法完全符合我們所有的需求，因此最後放棄原本整理好的資料。之後便轉而上網搜尋相關網頁爬取資訊，最後利用`scrapy`爬取目標網站之食譜並且進行篩以及整理，詳細資訊可以參考`backend/scraper`。

## Installation
### clone
```
git clone https://github.com/lycoris106/wp_final.git
```
### add `.env` in `backend`
```
MONGO_URL = <TA's mongodb link>
SALT_ROUNDS = <some number, recommend 10>
```
### frontend
```
cd frontend && yarn start
```
### backend
```
cd backend && yarn server
```
### note
- 預設食譜上傳到網站需要等一下，後端會顯示`database initialized!`
- 目前並無提供預設使用者，因此助教在測試前需要先`sign up`並且`sign in`

## Workload
### B08902024
- 
### B08204037
- 
### B08902069
- 

## Acknowledge
### efficiency
因為要做食材的比對, 而且可以接受使用者輸入自定義食材, 所以在搜尋以及傳輸上需要花上一點時間。目前的解決方法一是將資料分批傳輸，在搜尋結果頁面暫存已接收資訊，進入細節頁面時才傳送剩餘的資訊。之後可以改良的方向為儲存食材的資料結構，目前是最單純的字串比對，未來可以往`trie`或是`bit operation` 的方向改良。

### security
目前設計有防止登入`bypass`而且沒有將明碼存於資料庫，然而並沒有阻擋單一使用者的同時登入，未來打算以`timestamp`搭配`token`的方式做到單一使用無法同時登入以及逾時登出。

## Reference ??