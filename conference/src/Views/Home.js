import React from 'react';
// import navbar from '../Componets/nav.js';
import '../css/Home.css'

function Home(props) {
  return (
    <div>
      <div id="carousel-id" class="carousel slide slider-bg" data-ride="carousel">
        <div class="carousel-inner">
          <div class="item active">
            <img src="https://api.fnkr.net/testimg/2800x600/aaaaaa" alt="" />
            <div class="container">
              <div class="carousel-caption">
                <h1>我是標題喔～自己改文案吧</h1>
                <p>我是內文喔，你可以把字打在這裡呦</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='center-bg'>
        <div class='center-box'></div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-8 left-list">
              <div class='title-bg'>
                <div class='title-font'>研討會列表</div>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>研討會名稱</th>
                        <th>主辦單位</th>
                        <th>日期</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class='table-font'><a href='#'>112年智商研討會</a></td>
                        <td class='table-font'>智慧商務系</td>
                        <td>2023-5-5</td>
                      </tr>
                      <tr>
                        <td class='table-font'><a href=''>112年資管研討會</a></td>
                        <td class='table-font'>資訊管理系</td>
                        <td>2023-5-5</td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
            <div class="col-xs-12 col-md-3 right-list">
            <div class="search-bg search-font"></div>
            <div>
            <label class= "search-list" for="point-select">主辦單位:</label>
              <br/>
              <select id="point-select" class="list-content" name="fruit">
                <option value="point1">主辦單位1</option>
                <option value="point2">主辦單位2</option>
                <option value="point3">主辦單位3</option>
              </select>
            </div>
            <div>
            <label class= "search-list" for="area-select">主題領域:</label>
              <br/>
              <select id="area-select" class="list-content" name="fruit">
                <option value="area1">主題領域1</option>
                <option value="area2">主題領域2</option>
                <option value="area3">主題領域3</option>
              </select>
            </div>
            <div>
            <label class= "search-list" for="time-select">時間:</label>
              <br/>
              <select id="point-select" class="list-content" name="fruit">
                <option value="apple">主辦單位1</option>
                <option value="banana">主辦單位2</option>
                <option value="orange">主辦單位3</option>
              </select>
            </div>
            

            </div>
          </div>
        </div>
      </div>
      <footer class="center-box"></footer>
    </div>
  );
}

export default Home;
