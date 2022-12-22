import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <!-- Toolbar -->
    <div class="toolbar" role="banner">
      <img
        width="40"
        alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
      />
      <span>Daniel Lepe Vega</span>
    </div>

    <div class="content" role="main">

      <div class="card highlight-card card-small">

        <svg id="rocket" xmlns="http://www.w3.org/2000/svg" width="101.678" height="101.678" viewBox="0 0 101.678 101.678">
          <title>Rocket Ship</title>
          <g id="Group_83" data-name="Group 83" transform="translate(-141 -696)">
            <circle id="Ellipse_8" data-name="Ellipse 8" cx="50.839" cy="50.839" r="50.839" transform="translate(141 696)" fill="#dd0031"/>
            <g id="Group_47" data-name="Group 47" transform="translate(165.185 720.185)">
              <path id="Path_33" data-name="Path 33" d="M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z" transform="translate(0.371 3.363)" fill="#fff"/>
              <path id="Path_34" data-name="Path 34" d="M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z" transform="translate(0 0.005)" fill="#fff"/>
            </g>
          </g>
        </svg>

        <span>{{ title }} Input Field for a paynumber</span>

        <svg id="rocket-smoke" xmlns="http://www.w3.org/2000/svg" width="516.119" height="1083.632" viewBox="0 0 516.119 1083.632">
          <title>Rocket Ship Smoke</title>
          <path id="Path_40" data-name="Path 40" d="M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z" transform="translate(-147.025 -140.939)" fill="#f5f5f5"/>
        </svg>

      </div>

      <div>
        <form class="form">
          <mat-form-field class="full-width">
            <input matInput placeholder="Example id: 15577000" value="id">
          </mat-form-field>
          <button mat-raised-button color="primary">Submit</button>
        </form>
      </div>

      <div class="highlight-code">
          <pre class="example microlight" style="display: block; overflow-x: auto; padding: 0.5em; background: rgb(51, 51, 51); color: white">
            <code class="language-json" style="white-space: pre;">
              <span>'C'</span>
              <span>  </span><span class="hljs-attr">"serverStack"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{serverStack}}</span><span>,
              </span><span>  </span><span class="hljs-attr">"infoMessage"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{infoMessage}}</span><span>,
              </span><span>  </span><span class="hljs-attr">"errorMessage"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{errorMessage}}</span><span>,
              </span><span>  </span><span class="hljs-attr">"message"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{message}}</span><span>,
              </span><span>  </span><span class="hljs-attr">"status"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{status}}</span><span>,
              </span><span>  </span><span class="hljs-attr">"object"</span><span>: '['
              </span>    'C'
              <span>      </span><span class="hljs-attr">"paynumber"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{paynumber}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"status"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{status_pay}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"actualPickupDate"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{actualPickupDate}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"actualDeliveryDate"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{actualDeliveryDate}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"originCity"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{originCity}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"destinationCity"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{destinationCity}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"searchCriteria"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{searchCriteria}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"trackingComments"</span><span>: '['
              </span>        'C'
              <span>          </span><span class="hljs-attr">"comment"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{comment}}</span><span>,
              </span><span>          </span><span class="hljs-attr">"user"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{user}}</span><span>,
              </span><span>          </span><span class="hljs-attr">"timestamp"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{timestamp}}</span><span>,
              </span><span>          </span><span class="hljs-attr">"dateTime"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{dateTime}}</span><span>
              </span>        '}'
                    ']'
                  '}'
                '],'
              <span>  </span><span class="hljs-attr">"items"</span><span>: '['
              </span>    'C'
              <span>      </span><span class="hljs-attr">"paynumber"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{paynumber_items}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"status"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{status_items}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"actualPickupDate"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{actualPickupDate_items}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"actualDeliveryDate"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{actualDeliveryDate_items}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"originCity"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{originCity_items}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"destinationCity"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{destinationCity_items}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"searchCriteria"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{searchCriteria_items}}</span><span>,
              </span><span>      </span><span class="hljs-attr">"trackingComments"</span><span>: '['
              </span>        'C'
              <span>          </span><span class="hljs-attr">"comment"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{comment_items}}</span><span>,
              </span><span>          </span><span class="hljs-attr">"user"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{user_items}}</span><span>,
              </span><span>          </span><span class="hljs-attr">"timestamp"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{timestamp_items}}</span><span>,
              </span><span>          </span><span class="hljs-attr">"dateTime"</span><span>: </span><span style="color: rgb(162, 252, 162);">{{dateTime_items}}</span><span>
              </span>        '}'
                    ']'
                  '}'
                ']'
              '}'
            </code>
      </pre>
      </div>
      <svg id="clouds" xmlns="http://www.w3.org/2000/svg" width="2611.084" height="485.677" viewBox="0 0 2611.084 485.677">
        <title>Gray Clouds Background</title>
        <path id="Path_39" data-name="Path 39" d="M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z" transform="translate(142.69 -634.312)" fill="#eee"/>
      </svg>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {
  title = 'DanielLepeVegaInputApp';
  serverStack = ;
  infoMessage = ;
  errorMessage = ;
  message = ;
  status = ;
  paynumber = ;
  status_pay = ;
  actualPickupDate = ;
  actualDeliveryDate = ;
  originCity = ;
  destinationCity = ;
  searchCriteria = ;
  trackingComments = ;
  comment = ;
  user = ;
  timestamp = ;
  datetime = ;
  paynumber_items = ;
  status_items = ;
  actualPickupDate_items = ;
  actualDeliveryDate_items = ;
  originCity_items = ;
  destinationCity_items = ;
  searchCriteria_items = ;
  trackingComments_items = ;
  comment_items = ;
  user_items = ;
  timestamp_items = ;
  dateTime_items = ;
}
