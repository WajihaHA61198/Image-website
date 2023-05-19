import React from "react";

const ShareTable = () => {
  return (
    <React.Fragment>
      <div className="relative overflow-x-auto ">
        <table className="w-full text-xs text-gray-500 border-2 border-gray-100">
          <thead className="text-gray-700 bg-gray-50">
            <th
              scope="col"
              className="px-2 py-2 border-r-2 border-gray-100 text-center"
            >
              Number of Shareholders
            </th>
            <th
              scope="col"
              className="border-r-2 border-gray-100 flex flex-col"
            >
              <div className="px-2 py-2 invisible"> 1</div>
              <div className="px-2 py-2 text-center border-t-2 border-gray-100">
                From
              </div>
            </th>

            <th scope="col" classNamess="border-r-2 border-gray-100">
              <div className="border-b-2 border-gray-100 px-2 py-2 text-center">
                Shareholding
              </div>
              <div className="px-2 py-2 invisible"> 1</div>
            </th>

            <th scope="col" className="border-r-2 border-gray-100">
              <div className="px-2 py-2 invisible">1 </div>
              <div className="px-2 py-2 text-center border-t-2 border-gray-100">
                To
              </div>
            </th>

            <th
              scope="col"
              className="px-2 py-2 border-r-2 border-gray-100 text-center"
            >
              Shares Held
            </th>

            <th
              scope="col"
              className="px-2 py-2 border-r-2 border-gray-100 text-center"
            >
              Percentage
            </th>
          </thead>
          {/* ---------------- */}
          <tbody className="bg-white">
            {/* 1 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2 border-r-2 border-gray-100">641</td>
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2 border-r-2 border-gray-100"></td>
              <td className="p-2 border-r-2 border-gray-100">100</td>
              <td className="p-2 border-r-2 border-gray-100">39,357</td>
              <td className="p-2 border-r-2 border-gray-100">0.18</td>
            </tr>
            {/* 2 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2 border-r-2 border-gray-100">1,118</td>
              <td className="p-2 border-r-2 border-gray-100">101</td>
              <td className="p-2 border-r-2 border-gray-100"></td>
              <td className="p-2 border-r-2 border-gray-100">500</td>
              <td className="p-2 border-r-2 border-gray-100">412,279</td>
              <td className="p-2 border-r-2 border-gray-100">1.92</td>
            </tr>
            {/* 3 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1,402</td>
              <td className="p-2  border-r-2 border-gray-100">501</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">1,000</td>
              <td className="p-2  border-r-2 border-gray-100">1,165,185</td>
              <td className="p-2  border-r-2 border-gray-100">5.43</td>
            </tr>
            {/* 4 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">676</td>
              <td className="p-2  border-r-2 border-gray-100">1,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">5,000</td>
              <td className="p-2  border-r-2 border-gray-100">1,709,548</td>
              <td className="p-2  border-r-2 border-gray-100">7.96</td>
            </tr>
            {/* 5 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2 border-r-2 border-gray-100">173</td>
              <td className="p-2  border-r-2 border-gray-100">5,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">10,000</td>
              <td className="p-2  border-r-2 border-gray-100">1,380,658</td>
              <td className="p-2  border-r-2 border-gray-100">6.43</td>
            </tr>
            {/* 6 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">50</td>
              <td className="p-2  border-r-2 border-gray-100">10,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">15,000</td>
              <td className="p-2  border-r-2 border-gray-100">643,446</td>
              <td className="p-2  border-r-2 border-gray-100">3.16</td>
            </tr>
            {/* 7 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">37</td>
              <td className="p-2  border-r-2 border-gray-100">15,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">20,000</td>
              <td className="p-2  border-r-2 border-gray-100">679,352</td>
              <td className="p-2  border-r-2 border-gray-100">3.16</td>
            </tr>
            {/* 8 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">28</td>
              <td className="p-2  border-r-2 border-gray-100">20,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">25,000</td>
              <td className="p-2  border-r-2 border-gray-100">663,700</td>
              <td className="p-2  border-r-2 border-gray-100">3.09</td>
            </tr>
            {/* 9 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">12</td>
              <td className="p-2  border-r-2 border-gray-100">25,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">30,000</td>
              <td className="p-2  border-r-2 border-gray-100">333,253</td>
              <td className="p-2  border-r-2 border-gray-100">1.55</td>
            </tr>
            {/* 10 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">5</td>
              <td className="p-2  border-r-2 border-gray-100">30,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">35,000</td>
              <td className="p-2  border-r-2 border-gray-100">167,000</td>
              <td className="p-2  border-r-2 border-gray-100">0.78</td>
            </tr>
            {/* ------------------------ */}

            {/* 11 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">11</td>
              <td className="p-2  border-r-2 border-gray-100">35,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">40,000</td>
              <td className="p-2  border-r-2 border-gray-100">420,738</td>
              <td className="p-2  border-r-2 border-gray-100">1.96</td>
            </tr>
            {/* 12 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">6</td>
              <td className="p-2  border-r-2 border-gray-100">40,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">45,000</td>
              <td className="p-2  border-r-2 border-gray-100">259,056</td>
              <td className="p-2  border-r-2 border-gray-100">1.21</td>
            </tr>
            {/* 13 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">29</td>
              <td className="p-2  border-r-2 border-gray-100">45,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">50,000</td>
              <td className="p-2  border-r-2 border-gray-100">1,414,461</td>
              <td className="p-2  border-r-2 border-gray-100">6.59</td>
            </tr>
            {/* 14 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">5</td>
              <td className="p-2  border-r-2 border-gray-100">50,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">55,000</td>
              <td className="p-2  border-r-2 border-gray-100">257,702</td>
              <td className="p-2  border-r-2 border-gray-100">1.20</td>
            </tr>
            {/* 15 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">4</td>
              <td className="p-2  border-r-2 border-gray-100">55,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">60,000</td>
              <td className="p-2  border-r-2 border-gray-100">231,220</td>
              <td className="p-2  border-r-2 border-gray-100">1.08</td>
            </tr>
            {/* 16 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">2</td>
              <td className="p-2  border-r-2 border-gray-100">60,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">65,000</td>
              <td className="p-2  border-r-2 border-gray-100">125,500</td>
              <td className="p-2  border-r-2 border-gray-100">0.58</td>
            </tr>
            {/* 17 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">65,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">70,000</td>
              <td className="p-2  border-r-2 border-gray-100">70,000</td>
              <td className="p-2  border-r-2 border-gray-100">0.33</td>
            </tr>
            {/* 18 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">4</td>
              <td className="p-2  border-r-2 border-gray-100">70,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">75,000</td>
              <td className="p-2  border-r-2 border-gray-100">291,063</td>
              <td className="p-2  border-r-2 border-gray-100">1.36</td>
            </tr>
            {/* 19 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">2</td>
              <td className="p-2  border-r-2 border-gray-100">80,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">85,000</td>
              <td className="p-2  border-r-2 border-gray-100">165,449</td>
              <td className="p-2  border-r-2 border-gray-100">0.77</td>
            </tr>
            {/* 20 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">85,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">90,000</td>
              <td className="p-2  border-r-2 border-gray-100">87,000</td>
              <td className="p-2  border-r-2 border-gray-100">0.41</td>
            </tr>
            {/* ------------------------ */}

            {/* 21 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">2</td>
              <td className="p-2  border-r-2 border-gray-100">90,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">95,000</td>
              <td className="p-2  border-r-2 border-gray-100">185,333</td>
              <td className="p-2  border-r-2 border-gray-100">0.86</td>
            </tr>
            {/* 22 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">6</td>
              <td className="p-2  border-r-2 border-gray-100">95,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">100,000</td>
              <td className="p-2  border-r-2 border-gray-100">600,000</td>
              <td className="p-2  border-r-2 border-gray-100">2.80</td>
            </tr>
            {/* 23 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">105,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">110,000</td>
              <td className="p-2  border-r-2 border-gray-100">106,500</td>
              <td className="p-2  border-r-2 border-gray-100">0.50</td>
            </tr>
            {/* 24 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">110,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">115,000</td>
              <td className="p-2  border-r-2 border-gray-100">113,000</td>
              <td className="p-2  border-r-2 border-gray-100">0.53</td>
            </tr>
            {/* 25 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">4</td>
              <td className="p-2  border-r-2 border-gray-100">115,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">120,000</td>
              <td className="p-2  border-r-2 border-gray-100">474,824</td>
              <td className="p-2  border-r-2 border-gray-100">2.21</td>
            </tr>
            {/* 26 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">125,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">130,000</td>
              <td className="p-2  border-r-2 border-gray-100">127,500</td>
              <td className="p-2  border-r-2 border-gray-100">0.59</td>
            </tr>
            {/* 27 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">145,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">150,000</td>
              <td className="p-2  border-r-2 border-gray-100">150,000</td>
              <td className="p-2  border-r-2 border-gray-100">0.70</td>
            </tr>
            {/* 28 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">150,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">155,000</td>
              <td className="p-2  border-r-2 border-gray-100">155,000</td>
              <td className="p-2  border-r-2 border-gray-100">0.72</td>
            </tr>
            {/* 29 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">2</td>
              <td className="p-2  border-r-2 border-gray-100">155,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">160,000</td>
              <td className="p-2  border-r-2 border-gray-100">316,000</td>
              <td className="p-2  border-r-2 border-gray-100">1.47</td>
            </tr>
            {/* 30 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">160,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">165,000</td>
              <td className="p-2  border-r-2 border-gray-100">163,621</td>
              <td className="p-2  border-r-2 border-gray-100">0.76</td>
            </tr>
            {/* --------------------------- */}

            {/* 31 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">170,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">175,000</td>
              <td className="p-2  border-r-2 border-gray-100">175,000</td>
              <td className="p-2  border-r-2 border-gray-100">0.82</td>
            </tr>
            {/* 32 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">175,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">180,000</td>
              <td className="p-2  border-r-2 border-gray-100">176,000</td>
              <td className="p-2  border-r-2 border-gray-100">0.82</td>
            </tr>
            {/* 33 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">180,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">185,000</td>
              <td className="p-2  border-r-2 border-gray-100">182,252</td>
              <td className="p-2  border-r-2 border-gray-100">0.85</td>
            </tr>
            {/* 34 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">185,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">190,000</td>
              <td className="p-2  border-r-2 border-gray-100">190,000</td>
              <td className="p-2  border-r-2 border-gray-100">0.89</td>
            </tr>
            {/* 35 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">190,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">195,000</td>
              <td className="p-2  border-r-2 border-gray-100">190,500</td>
              <td className="p-2  border-r-2 border-gray-100">0.89</td>
            </tr>
            {/* 36 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">2</td>
              <td className="p-2  border-r-2 border-gray-100">195,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">200,000</td>
              <td className="p-2  border-r-2 border-gray-100">400,500</td>
              <td className="p-2  border-r-2 border-gray-100">1.86</td>
            </tr>
            {/* 37 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">220,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">225,000</td>
              <td className="p-2  border-r-2 border-gray-100">224,000</td>
              <td className="p-2  border-r-2 border-gray-100">1.04</td>
            </tr>
            {/* 38 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">235,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">240,000</td>
              <td className="p-2  border-r-2 border-gray-100">240,000</td>
              <td className="p-2  border-r-2 border-gray-100">1.12</td>
            </tr>
            {/* 39 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">265,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">270,000</td>
              <td className="p-2  border-r-2 border-gray-100">267,000</td>
              <td className="p-2  border-r-2 border-gray-100">1.25</td>
            </tr>
            {/* 40 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">2</td>
              <td className="p-2  border-r-2 border-gray-100">270,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">275,000</td>
              <td className="p-2  border-r-2 border-gray-100">546,636</td>
              <td className="p-2  border-r-2 border-gray-100">2.55</td>
            </tr>
            {/* --------------------------- */}

            {/* 41 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">275,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">280,000</td>
              <td className="p-2  border-r-2 border-gray-100">277,390</td>
              <td className="p-2  border-r-2 border-gray-100">1.29</td>
            </tr>
            {/* 42 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">330,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">335,000</td>
              <td className="p-2  border-r-2 border-gray-100">335,000</td>
              <td className="p-2  border-r-2 border-gray-100">1.56</td>
            </tr>
            {/* 43 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">355,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">360,000</td>
              <td className="p-2  border-r-2 border-gray-100">360,252</td>
              <td className="p-2  border-r-2 border-gray-100">1.68</td>
            </tr>
            {/* 44 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">365,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">370,000</td>
              <td className="p-2  border-r-2 border-gray-100">369,000</td>
              <td className="p-2  border-r-2 border-gray-100">1.72</td>
            </tr>
            {/* 45 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">440,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">445,000</td>
              <td className="p-2  border-r-2 border-gray-100">440,500</td>
              <td className="p-2  border-r-2 border-gray-100">2.05</td>
            </tr>
            {/* 46 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">685,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">690,000</td>
              <td className="p-2  border-r-2 border-gray-100">688,916</td>
              <td className="p-2  border-r-2 border-gray-100">3.21</td>
            </tr>
            {/* 47 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">750,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">755,000</td>
              <td className="p-2  border-r-2 border-gray-100">754,794</td>
              <td className="p-2  border-r-2 border-gray-100">3.52</td>
            </tr>
            {/* 48 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">765,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">770,000</td>
              <td className="p-2  border-r-2 border-gray-100">769,000</td>
              <td className="p-2  border-r-2 border-gray-100">3.58</td>
            </tr>
            {/* 49 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">860,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">865,000</td>
              <td className="p-2  border-r-2 border-gray-100">865,000</td>
              <td className="p-2  border-r-2 border-gray-100">4.03</td>
            </tr>
            {/* 50 */}
            <tr className="border-b-2 border-gray-100 text-center">
              <td className="p-2  border-r-2 border-gray-100">1</td>
              <td className="p-2  border-r-2 border-gray-100">1,105,001</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">1,110,000</td>
              <td className="p-2  border-r-2 border-gray-100">1,106,000</td>
              <td className="p-2  border-r-2 border-gray-100">5.15</td>
            </tr>
            {/* --------------------------- */}
            {/* Result */}
            <tr className="border-b-2 border-gray-100 text-center text-gray-900 font-semibold bg-gray-50">
              <td className="p-2  border-r-2 border-gray-100">4,249</td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100"></td>
              <td className="p-2  border-r-2 border-gray-100">21,465,733</td>
              <td className="p-2  border-r-2 border-gray-100">100.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ShareTable;
